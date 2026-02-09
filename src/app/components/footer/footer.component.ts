import { NavigationService } from './../../../services/navigation.service';
import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})

/**
 * Footer component that provides site information and navigation links.
 * Utilizes Angular services for smooth scrolling to page sections.
 * Displays the current year dynamically.
 */
export class FooterComponent {

  constructor(public navigationService: NavigationService, private router: Router) { }

  /**
   * Navigates to a section by its HTML id.
   * First navigates to the home route, then scrolls to the target section.
   * @param id The HTML id of the target section
   */
  goToSection(id: string): void {
  this.router.navigate(['/']).then(() => {
    setTimeout(() => {
      this.navigationService.scrollTo(id);
    }, 150);
  });
}

  /**
   * Returns the current year for display in the footer.
   * This ensures the copyright year is always up to date.
   * @returns The current year as a number.
   */
  date = new Date().getFullYear();
}

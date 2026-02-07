import { Component } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';

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

  constructor(public scrollService: ScrollService) { }

  /** * Scrolls smoothly to a section of the page by its HTML id.
   * @param id The HTML id of the target section to scroll to.
   */
  scrollTo(id: string): void {
    this.scrollService.scrollTo(id);
  }

  /**
   * Returns the current year for display in the footer.
   * This ensures the copyright year is always up to date.
   * @returns The current year as a number.
   */
  date = new Date().getFullYear();
}

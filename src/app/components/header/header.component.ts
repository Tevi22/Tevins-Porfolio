import { NavigationService } from './../../../services/navigation.service';
import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})

/**
 * Navbar component that provides site navigation and theme toggling functionality.
 * Utilizes Bootstrap for responsive design and Angular services for theme management.
 * Includes a toggle for light/dark themes.
 */
export class HeaderComponent {

  constructor(private router: Router, public themeService: ThemeService, public navigationService: NavigationService) { }

  /** * Navigates to a section by its HTML id.
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

  /** * Toggles between light and dark themes.
   */
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  /**
   * Returns true if the current theme is dark, false otherwise.
 */
  get isDark(): boolean {
    return this.themeService.isDarkTheme();
  }


}

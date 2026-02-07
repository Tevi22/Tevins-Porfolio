import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { ScrollService } from '../../../services/scroll.service';
import { CommonModule } from '@angular/common';

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

  constructor(public themeService: ThemeService, public scrollService: ScrollService) { }

  /** * Scrolls smoothly to a section of the page by its HTML id.
   * @param id The HTML id of the target section to scroll to.
   */
  scrollTo(id: string): void {
  this.scrollService.scrollTo(id);
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

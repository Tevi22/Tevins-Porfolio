import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  /**
   * Smoothly scrolls to a section by element ID.
   * Safe for hash routing and GitHub Pages.
   *
   * @param id The HTML id of the target section
   */
  scrollTo(id: string): void {
    const element = document.getElementById(id);

    if (!element) {
      console.warn(`Scroll target not found: ${id}`);
      return;
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

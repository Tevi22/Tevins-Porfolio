import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  /**
   * Smoothly scrolls to a section by element ID.
   * Works only if the element exists in the DOM.
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

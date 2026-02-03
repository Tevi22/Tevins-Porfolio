import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme';
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  initTheme(): void {
    if (!this.isBrowser) return;

    const savedTheme = localStorage.getItem(this.THEME_KEY) || 'light-theme';
    this.document.body.classList.add(savedTheme);
  }

  toggleTheme(): void {
    if (!this.isBrowser) return;

    const body = this.document.body;
    const isDark = body.classList.contains('dark-theme');

    body.classList.remove(isDark ? 'dark-theme' : 'light-theme');
    body.classList.add(isDark ? 'light-theme' : 'dark-theme');

    localStorage.setItem(
      this.THEME_KEY,
      isDark ? 'light-theme' : 'dark-theme'
    );
  }

  isDarkTheme(): boolean {
    if (!this.isBrowser) return false;
    return this.document.body.classList.contains('dark-theme');
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject: BehaviorSubject<string>;
  public currentTheme$: Observable<string>;

  constructor() { 
    // Initialize with defualt theme
    this.currentThemeSubject = new BehaviorSubject<string>('light-theme');
    this.currentTheme$ = this.currentThemeSubject.asObservable();
  }

  getCurrentTheme(): Observable<string> {
    return this.currentTheme$;
  }

  toggleTheme(): void {
    const currentTheme = this.currentThemeSubject.getValue();
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.currentThemeSubject.next(newTheme);
  }
  
}

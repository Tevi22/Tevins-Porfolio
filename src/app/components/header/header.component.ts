import { Component } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule  } from '@angular/common';

declare function toggleTheme(): void; // Declare the toggleTheme function

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgbCollapse,
    CommonModule,

  ],
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})

export class HeaderComponent {
  isCollapsed: boolean = false;
  enableClick: boolean = true;

  toggleTheme(): void {
    // Call the globally declared toggleTheme function
    toggleTheme();
    this.toggleNavbar();
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  
}

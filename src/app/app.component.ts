import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WorkExperianceComponent } from './components/work-experiance/work-experiance.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from '../services/theme.service';
import { Subscription } from 'rxjs';

declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    WorkExperianceComponent,
    SkillsComponent,
    ProjectsComponent,
    TestimonialComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  public currentTheme: string = '';
  private themeSubscription: Subscription | undefined;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Initialize AOS
    AOS.init();

    // Subscribe to theme changes
    this.themeSubscription = this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
      this.updateStyles();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from theme changes
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  updateStyles(): void {
    const elements = document.querySelectorAll('.dark-theme');
    elements.forEach(element => {
      if (this.currentTheme === 'dark-theme') {
        element.classList.add('dark-mode');
      } else {
        element.classList.remove('dark-mode');
      }
    });
  }

}


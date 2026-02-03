import { Component, OnInit } from '@angular/core';
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

export class AppComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.initTheme();

  }

}


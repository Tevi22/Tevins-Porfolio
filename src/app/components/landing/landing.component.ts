import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { WorkExperianceComponent } from "../work-experiance/work-experiance.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HomeComponent, AboutComponent, WorkExperianceComponent, SkillsComponent, ProjectsComponent, TestimonialComponent, ContactComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

}

import { Component,ViewEncapsulation } from '@angular/core';
import { NgbModule, NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgbModule,
    NgbCarousel,
    NgFor
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbCarouselConfig],
})

export class ProjectsComponent {
  projects = [
    {
      title: 'Inuyasha Text Based Game',
      imageUrl: '../assets/Images/Inuyasha Text Based Game.png',
      githubUrl: 'https://github.com/Tevi22/Inuyasha-Text-Based-Game/tree/main',
      tags: ['#Python']
    },
    {
      title: 'Mobile Auto Mechanic Website',
      imageUrl: '../assets/Images/Auto Mechanic Website.png',
      githubUrl: 'https://github.com/Tevi22/JavaScript_Workspace/tree/main/Capstone%20Project/automobmechanic-app',
      tags: ['#HTML', '#CSS', '#JS']
    },
    {
      title: 'Fotomatic Company Website',
      imageUrl: '../assets/Images/Fotomatic Company Website.png',
      githubUrl: 'https://github.com/Tevi22/capstone-fotomatic',
      tags: ['#HTML', '#CSS', '#JS', '#FixResponsivePage']
    }
  ];
}


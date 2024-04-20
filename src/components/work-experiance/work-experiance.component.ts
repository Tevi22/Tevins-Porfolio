import { Component } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-work-experiance',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: 'work-experiance.component.html',
  styleUrls: ['work-experiance.component.css']
})
export class WorkExperianceComponent {
  workExperience = [
    {
      role: 'Tech Support Associate',
      company: 'Infosys',
      date: ' September, 2023 - Present'
    },
    {
      role: 'Tech Support Intern',
      company: 'Infosys',
      date: ' July, 20222 - September, 2023'
    },
    {
      role: 'General Manager',
      company: 'The Old Spaghetti Factory',
      date: ' October, 2015 - March 2022'
    },
  ];

  education = [
    {
      schoolName: 'SNHU',
      degree: 'Information Technology',
      date: 'October, 2023 - Present'
    },
    {
      schoolName: 'New Apprentice',
      degree: 'ITSN Apprentice',
      date: 'July, 2022 - September, 2023'
    },
    {
      schoolName: 'New Apprentice',
      degree: 'ITSN Bootcamp',
      date: 'May, 2022 - July, 2022'
    }
  ];
  
}

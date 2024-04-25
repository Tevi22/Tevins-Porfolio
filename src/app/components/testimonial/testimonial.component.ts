import { Component, ViewEncapsulation } from '@angular/core';
import { NgFor,  } from '@angular/common';
import { NgbModule, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [
    NgFor,
    NgbModule,
    NgbCarousel
    
  ],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TestimonialComponent {

  testimonials = [
    {
      imageUrl: './assets/Images/test1.jpg',
      title: 'Sarah Johnson',
      text: '"Working with Tevin was an absolute pleasure! His attention to detail and commitment to excellence are truly remarkable. He consistently delivered high-quality work, and his expertise in web development played a significant role in the success of our project. I highly recommend Tevin to anyone seeking a dedicated and talented developer."',
      author: 'Sarah Johnson',
      jobTitle: 'Project Manager'
    },
    {
      imageUrl: './assets/Images/test2.jpg',
      title: 'Shrikant Kulkarni',
      text: '"I highly recommend Tevin for his outstanding performance in the ServiceNow bootcamp for New Apprenticeship. His mastery of client scripts, business rules, script includes, JavaScript, and Angular was evident in the assignments and projects he worked on. Tevin`s creativity shone through in crafting a remarkable movie rating app using ServiceNow Studio. Tevin is very sincere and hardworking. A dedicated and skilled professional, Tevin would be a valuable asset to any team in the field of ServiceNow development and front-end technologies." ',
      author: 'Shrikant Kulkarni',
      jobTitle: 'ServiceNow Trainer'
    },
    {
      imageUrl: './assets/Images/test3.jpg',
      title: 'Emily Thompson',
      text: '"Tevin`s expertise in front-end development played a pivotal role in elevating our website to the next level. His creative approach to problem-solving and his willingness to go above and beyond to meet project requirements were truly commendable. Tevin is a highly skilled developer who brings a wealth of knowledge and experience to any team. I would highly recommend him to anyone looking for a top-tier developer." ',
      author: 'Emily Thompson',
      jobTitle: 'CEO'
    }
    
  ];

}

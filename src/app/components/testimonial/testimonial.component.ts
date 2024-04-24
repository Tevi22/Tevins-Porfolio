import { Component, ViewEncapsulation } from '@angular/core';
import { NgFor,  } from '@angular/common';
import { NgbModule, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { title } from 'node:process';



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
      imageUrl: '../../../assets/Images/test1.jpeg',
      title: 'Sarah Johnson',
      text: '"Working with Tevin was an absolute pleasure! His attention to detail and commitment to excellence are truly remarkable. He consistently delivered high-quality work, and his expertise in web development played a significant role in the success of our project. I highly recommend Tevin to anyone seeking a dedicated and talented developer."',
      author: 'Sarah Johnson',
      jobTitle: 'Project Manager'
    },
    {
      imageUrl: './assets/Images/test2.jpg',
      title: 'Michael Smith',
      text: '"Tevin is an exceptional developer with a keen eye for design and a deep understanding of programming concepts. His ability to grasp complex requirements and translate them into elegant solutions is impressive. I was thoroughly impressed by his professionalism, communication skills, and commitment to delivering results on time. It was a pleasure collaborating with Tevin, and I look forward to working with him again in the future." ',
      author: 'Michael Smith',
      jobTitle: 'Lead Designer'
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

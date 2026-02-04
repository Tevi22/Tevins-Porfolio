import { Injectable } from '@angular/core';
import { UseCase } from '../app/models/use-case.model';

@Injectable({
  providedIn: 'root'
})
export class UseCaseService {

  private useCases: UseCase[] = [
    {
      slug: 'flight-booking',
      title: 'Flight Booking Web Application',
      description: 'A full-stack flight search and booking system.',
      overview:
        'This project demonstrates full-stack application development using Angular and Spring Boot.',
      problem:
        'Users need an intuitive way to search and book flights without complex workflows.',
      solution:
        'A modular Angular frontend integrated with RESTful Spring Boot APIs and MySQL.',
      techStack: [
        'Angular 17',
        'Spring Boot',
        'MySQL',
        'REST APIs',
        'JUnit / Mockito'
      ],
      features: [
        'Flight search and filtering',
        'Booking workflow',
        'User authentication',
        'Server-side validation'
      ],
      challenges:
        'Designing clean API boundaries and managing frontend-backend integration.',
      githubUrl: 'https://github.com/Tevi22/flight-booking-app'
    },

    {
      slug: 'auth-service',
      title: 'Authentication & Registration Service',
      description: 'RESTful authentication service for user login and registration.',
      overview:
        'A backend-focused service designed to handle authentication and validation.',
      problem:
        'Applications require secure, reusable authentication logic.',
      solution:
        'A Spring Boot REST service with validation and XML-based persistence.',
      techStack: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'XML'
      ],
      features: [
        'User registration',
        'Credential validation',
        'Reusable authentication endpoints'
      ],
      challenges:
        'Ensuring secure validation while keeping the service lightweight.',
      githubUrl: 'https://github.com/Tevi22/authservice'
    },

    {
      slug: 'ace-restaurant',
      title: 'Ace Restaurant Ordering App',
      description: 'Android application for restaurant ordering with interactive UI and pricing logic.',
      overview:
        'This Android application was developed to simulate a real-world restaurant ordering experience with a focus on clean UI design and separation of concerns.',
      problem:
        'Many small restaurants lack affordable, easy-to-use mobile ordering systems.',
      solution:
        'A native Android app that allows users to browse menus, calculate pricing, and place orders through an intuitive interface.',
      techStack: [
        'Java',
        'Android SDK',
        'MVC Architecture'
      ],
      features: [
        'Menu browsing and item selection',
        'Dynamic pricing calculations',
        'Clean UI and UX design',
        'Separation of UI and business logic'
      ],
      challenges:
        'Ensuring accurate pricing logic while maintaining a responsive and intuitive UI.',
      githubUrl: 'https://github.com/Tevi22/AceRestaurant-'
    },

    {
      slug: 'portfolio',
      title: 'Developer Portfolio Website',
      description: 'Single-page Angular application designed to showcase projects, skills, and experience.',
      overview:
        'This portfolio was designed to present my technical skills, projects, and experience in a modern, responsive, and scalable web application.',
      problem:
        'Developers need a professional platform to showcase their work beyond a traditional resume.',
      solution:
        'A single-page Angular application with dynamic routing, reusable components, and responsive design.',
      techStack: [
        'Angular 17',
        'TypeScript',
        'CSS',
        'GitHub Pages'
      ],
      features: [
        'Single-page application layout',
        'Dynamic project use case routing',
        'Responsive design',
        'Clean component-based architecture'
      ],
      challenges:
        'Balancing performance, maintainability, and design consistency while scaling the application.',
      githubUrl: 'https://github.com/Tevi22/Tevins-Portfolio',
      demoUrl: 'https://tevi22.github.io/Tevins-Portfolio/'
    },

    {
      slug: 'weather-app',
      title: 'Weather App',
      description: 'Angular application for fetching and displaying weather data from a public API.',
      overview:
        'This project demonstrates API integration, data handling, and responsive UI design using Angular.',
      problem:
        'Users need a simple way to view current and forecasted weather without cluttered interfaces.',
      solution:
        'An Angular SPA that consumes a public weather API and presents data in a clean, user-friendly format.',
      techStack: [
        'Angular',
        'TypeScript',
        'Public Weather API'
      ],
      features: [
        'Real-time weather data',
        '7-day forecast display',
        'API integration',
        'Responsive layout'
      ],
      challenges:
        'Handling asynchronous API responses and ensuring accurate data presentation.',
      githubUrl: 'https://github.com/Tevi22/Tevin/tree/master/Angular_Workspace/weather-app'
    }
  ];

  getUseCaseBySlug(slug: string): UseCase | undefined {
    return this.useCases.find(u => u.slug === slug);
  }
}

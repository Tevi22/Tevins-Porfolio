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
      learnings: [
        'How to design and consume RESTful APIs across frontend and backend',
        'Structuring Angular applications using standalone components and routing',
        'Managing server-side validation and database persistence with Spring Boot',
        'Improving separation of concerns between UI, services, and data layers'
      ],
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
      learnings: [
        'Designing reusable authentication services for multiple applications',
        'Implementing RESTful endpoints with proper validation and error handling',
        'Managing user credentials securely within a backend service',
        'Structuring backend applications for maintainability and scalability',
        'Understanding authentication workflows independent of frontend concerns'
      ],

      githubUrl: 'https://github.com/Tevi22/authservice'
    },

    {
      slug: 'ace-restaurant',
      title: 'Ace Restaurant Ordering App',
      description:
        'Native Android mobile ordering application simulating a full restaurant checkout experience with real-time pricing, validation, and user-centered design.',

      overview:
        'Ace Restaurant is a native Android application designed to simulate a real-world restaurant ordering workflow. The project focuses on clean architecture, responsive UI design, and realistic ordering logic, including menu browsing, item customization, cart management, and secure checkout validation. The app was built to reflect how modern mobile food-ordering platforms balance usability, performance, and maintainability.',

      problem:
        'Many small restaurants lack affordable, scalable mobile ordering solutions that provide a smooth user experience while remaining easy to maintain and extend.',

      solution:
        'A native Android application that enables users to browse categorized menus, customize items, manage a cart, and complete an order through an intuitive, accessible interface. The solution emphasizes separation of concerns, real-time feedback, and validation to closely mirror production-level mobile ordering systems.',

      techStack: [
        'Kotlin',
        'Android SDK',
        'Android Studio',
        'MVVM / MVC-inspired Architecture',
        'Jetpack Components (ViewModel, LiveData, Navigation)',
        'Material Design'
      ],

      features: [
        'Categorized menu browsing with real-time search',
        'Item customization with dynamic price recalculation',
        'Shared cart state across multiple screens',
        'Checkout flow with inline form validation',
        'Credit card auto-formatting and length verification',
        'Order summary with subtotal, tax, and total updates',
        'Accessibility-aware UI using Material Design principles'
      ],

      challenges:
        'Balancing accurate pricing logic and input validation while maintaining a responsive UI across multiple fragments. Additional challenges included handling edge cases in credit card formatting, managing shared state between cart and checkout screens, and ensuring accessibility without compromising visual clarity.',

      learnings: [
        'Designing a real-world mobile ordering workflow from concept to implementation',
        'Applying separation of concerns using ViewModels and shared state',
        'Implementing defensive input validation for payment-related fields',
        'Improving UX through real-time feedback and dynamic UI updates',
        'Building scalable Android applications with future backend integration in mind',
        'Incorporating accessibility and ethical design practices early in development'
      ],

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
      learnings: [
        'Designing a scalable Angular application using standalone components',
        'Implementing dynamic routing and reusable use case pages',
        'Handling theming and global state across routed views',
        'Deploying Angular applications to GitHub Pages'
      ],
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
      learnings: [
        'Consuming third-party APIs and handling asynchronous data',
        'Managing application state during API calls',
        'Designing responsive layouts for dynamic data',
        'Improving error handling and loading states'
      ],
      githubUrl: 'https://github.com/Tevi22/Tevin/tree/master/Angular_Workspace/weather-app'
    }
  ];

  getUseCaseBySlug(slug: string): UseCase | undefined {
    return this.useCases.find(u => u.slug === slug);
  }
}

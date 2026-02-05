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
      description: 'A full-stack airline booking system with real-time seat management and transactional bookings.',
      overview:
        'This project simulates a real-world airline reservation system, allowing users to search for flights, book seats, view confirmations, and cancel bookings while maintaining accurate seat availability.',
      problem:
        'Airline booking systems must manage dynamic inventory, prevent overbooking, and ensure data consistency across searches, bookings, and cancellations.',
      solution:
        'A Spring Boot MVC application using RESTful endpoints, a service-driven architecture, and a MySQL database to handle bookings and seat availability transactionally.',
      techStack: [
        'Java 17',
        'Spring Boot (MVC, JPA)',
        'Thymeleaf',
        'MySQL',
        'REST APIs',
        'JUnit / MockMvc'
      ],
      features: [
        'Case-insensitive flight search by origin, destination, and date',
        'Flight booking with passenger tracking',
        'Transactional seat availability management',
        'Booking confirmation and cancellation workflow',
        'Server-side validation and error handling'
      ],
      challenges:
        'Ensuring seat counts remained consistent across booking and cancellation workflows while maintaining clean separation between controller, service, and repository layers.',
      learnings: [
        'Designing transactional business logic with Spring services',
        'Implementing RESTful search endpoints backed by a relational database',
        'Applying the Post/Redirect/Get pattern to prevent duplicate submissions',
        'Writing controller-level unit tests with MockMvc',
        'Debugging real-world issues related to persistence, routing, and test alignment'
      ],
      githubUrl: 'https://github.com/Tevi22/flight-booking-app'
    },

    {
      slug: 'auth-service',
      title: 'Authentication & Registration REST Service',
      description: 'A Spring Boot RESTful authentication service with XML-based persistence and clean layered architecture.',
      overview:
        'This project is a backend-focused authentication and registration service built with Spring Boot and Java 17. It demonstrates RESTful API design, clean separation of concerns, and alternative persistence strategies using XML rather than a traditional database.',
      problem:
        'Many applications need lightweight, reusable authentication logic without the overhead of a full database or identity provider during early development or academic prototyping.',
      solution:
        'A modular Spring Boot REST service that supports user registration and authentication, persisting user data in an XML file using JAXB while exposing clean, testable REST endpoints.',
      techStack: [
        'Java 17',
        'Spring Boot',
        'REST APIs',
        'JAXB',
        'XML Persistence',
        'Maven',
        'JUnit'
      ],
      features: [
        'User registration and authentication endpoints',
        'XML-based user persistence using JAXB',
        'RESTful API design with clear HTTP status handling',
        'Layered controller-service-model architecture',
        'Basic front-end HTML pages for manual API testing',
        'Controller-level unit testing'
      ],
      challenges:
        'Designing a secure and maintainable authentication flow while using XML-based persistence instead of a traditional database.',
      learnings: [
        'Designing reusable authentication services independent of frontend frameworks',
        'Implementing RESTful endpoints with proper validation and error handling',
        'Using JAXB for XML marshaling and unmarshaling in Java applications',
        'Applying clean controller-service-model architecture in Spring Boot',
        'Understanding authentication workflows without relying on databases or third-party identity providers'
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
      title: 'Weather Forecast Web Application',
      description: 'Angular single-page application for retrieving and displaying real-time and forecasted weather data.',
      overview:
        'This project is a frontend-focused Angular application built to demonstrate API integration, component-based design, and responsive UI development. It was created using Angular CLI and emphasizes clean structure, reusable components, and smooth data-driven updates.',
      problem:
        'Many weather applications overwhelm users with cluttered layouts and unnecessary information, making it difficult to quickly understand current and upcoming conditions.',
      solution:
        'A lightweight Angular single-page application that consumes a public weather API and presents current conditions and forecasts in a clear, readable, and responsive interface.',
      techStack: [
        'Angular 17',
        'TypeScript',
        'HTML5',
        'CSS',
        'Public Weather API',
        'Angular CLI'
      ],
      features: [
        'Real-time weather data retrieval',
        'Forecast display for upcoming days',
        'API-driven data rendering',
        'Component-based UI architecture',
        'Responsive design for desktop and mobile',
        'Automatic refresh during development with Angular CLI'
      ],
      challenges:
        'Managing asynchronous API calls, handling loading states, and ensuring reliable data presentation while keeping the UI clean and responsive.',
      learnings: [
        'Consuming third-party APIs using Angular services',
        'Handling asynchronous data flows and state updates',
        'Structuring Angular applications with reusable components',
        'Improving user experience through responsive layouts',
        'Using Angular CLI tooling for development, builds, and testing'
      ],
      githubUrl: 'https://github.com/Tevi22/Tevin/tree/master/Angular_Workspace/weather-app'
    }
  ];

  getUseCaseBySlug(slug: string): UseCase | undefined {
    return this.useCases.find(u => u.slug === slug);
  }
}

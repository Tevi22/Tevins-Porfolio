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
      imageUrl: 'assets/Images/flight_booking_app.png',
      description: 'A full-stack airline booking system with real-time seat management and transactional bookings.',
      role: 'Java Full-Stack Developer',
      timeline: '10 weeks',
      overview:
        'This project simulates a real-world airline reservation system, allowing users to search for flights, book seats, view confirmations, and cancel bookings while maintaining accurate seat availability.',
      problem:
        'Airline booking systems must manage dynamic inventory, prevent overbooking, and ensure data consistency across searches, bookings, and cancellations.',
      solution:
        'A Spring Boot MVC application using RESTful endpoints, a service-driven architecture, and a MySQL database to handle bookings and seat availability transactionally.',
      userFlow: [
        'Login / Register',
        'Search for flights',
        'View Results and Select Flight',
        'Book Flight with Passenger Details',
        'Receive Booking Confirmation',
        'Manage Bookings',
        'Cancel Booking if needed'
      ],
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
      imageUrl: 'assets/Images/authservice.png',
      description:
        'Spring Boot RESTful authentication service with XML-based persistence and clean layered architecture.',

      role: 'Backend Java Developer',
      timeline: '2 weeks',

      problem:
        'Many applications require reusable authentication logic during early development or academic prototyping, but integrating a full database or third-party identity provider can add unnecessary complexity.',

      solution:
        'Built a modular Spring Boot REST service that supports user registration and authentication while persisting user data to XML using JAXB, providing a lightweight and easily testable alternative to database-backed solutions.',

      userFlow: [
        'Submit registration request',
        'Validate user input',
        'Persist user data to XML',
        'Authenticate user credentials',
        'Return REST response with status'
      ],

      features: [
        'User registration and authentication REST endpoints',
        'XML-based user persistence using JAXB',
        'RESTful API design with proper HTTP status handling',
        'Layered controller-service-model architecture',
        'Input validation and error handling',
        'Controller-level unit testing with JUnit'
      ],

      techStack: [
        'Java 17',
        'Spring Boot',
        'REST APIs',
        'JAXB',
        'XML Persistence',
        'Maven',
        'JUnit'
      ],

      challenges:
        'Designing a maintainable and testable authentication flow while using XML-based persistence instead of a traditional database, while still following REST and security best practices.',

      learnings: [
        'Designing backend services independent of frontend frameworks',
        'Implementing RESTful authentication workflows with validation and error handling',
        'Using JAXB for XML marshaling and unmarshaling',
        'Applying clean controller-service-model architecture in Spring Boot',
        'Understanding authentication design without relying on databases or third-party identity providers'
      ],

      githubUrl: 'https://github.com/Tevi22/authservice'
    },

    {
      slug: 'ace-restaurant',
      title: 'Ace Restaurant Ordering App',
      imageUrl: 'assets/Images/ace_restuarant_app.png',
      description:
        'Native Android mobile ordering application simulating a full restaurant checkout experience with real-time pricing, validation, and user-centered design.',

      role: 'Android Developer',
      timeline: '10 weeks',

      problem:
        'Many small restaurants lack affordable, scalable mobile ordering solutions that provide a smooth user experience while remaining easy to maintain and extend.',

      solution:
        'Developed a native Android application that enables users to browse categorized menus, customize items, manage a shared cart, and complete an order through an intuitive, accessible interface. The solution emphasizes separation of concerns, real-time feedback, and validation to closely mirror production-level mobile ordering systems.',

      userFlow: [
        'Browse categorized menu',
        'Search and select items',
        'Customize item options',
        'Add items to cart',
        'Review order summary',
        'Enter payment details',
        'Complete checkout'
      ],

      features: [
        'Categorized menu browsing with real-time search',
        'Item customization with dynamic price recalculation',
        'Shared cart state across multiple screens',
        'Checkout flow with inline form validation',
        'Credit card auto-formatting and length verification',
        'Order summary with live subtotal, tax, and total updates',
        'Accessibility-aware UI using Material Design principles'
      ],

      techStack: [
        'Kotlin',
        'Android SDK',
        'Android Studio',
        'MVVM / MVC-inspired Architecture',
        'Jetpack Components (ViewModel, LiveData, Navigation)',
        'Material Design'
      ],

      challenges:
        'Maintaining accurate pricing logic and input validation while keeping the UI responsive across multiple fragments. Additional challenges included managing shared cart state, handling edge cases in credit card formatting, and ensuring accessibility without compromising visual clarity.',

      learnings: [
        'Designing a real-world mobile ordering workflow from concept to implementation',
        'Applying separation of concerns using ViewModels and shared state',
        'Implementing defensive input validation for payment-related fields',
        'Enhancing UX through real-time feedback and dynamic UI updates',
        'Building scalable Android applications with future backend integration in mind',
        'Incorporating accessibility and ethical design practices early in development'
      ],

      githubUrl: 'https://github.com/Tevi22/AceRestaurant-',
      demoUrl: 'assets/Demo/ace_restuarant_demo.mp4'
    },

    {
      slug: 'portfolio',
      title: 'Developer Portfolio Website',
      imageUrl: 'assets/Images/portfolio.png',
      description:
        'Single-page Angular application built to showcase projects, skills, and experience using a scalable, component-driven architecture.',

      role: 'Frontend / Full-Stack Developer',
      timeline: 'Ongoing',

      problem:
        'Developers need a professional, interactive platform to showcase projects and technical skills beyond a static resume, while remaining easy to update and scale over time.',

      solution:
        'Designed and built a single-page Angular application featuring dynamic routing, reusable components, and responsive layouts. The portfolio emphasizes clarity, maintainability, and extensibility, allowing new projects and use cases to be added with minimal effort.',

      userFlow: [
        'Land on portfolio homepage',
        'Browse experience and skills',
        'View projects list',
        'Open project use case',
        'Explore project details',
        'Navigate back to projects'
      ],

      features: [
        'Single-page application architecture using Angular',
        'Dynamic project and use case routing via slugs',
        'Reusable, data-driven use case layout',
        'Responsive design for desktop and mobile',
        'Clean component-based architecture',
        'Centralized project and use case data management'
      ],

      techStack: [
        'Angular 17',
        'TypeScript',
        'CSS',
        'GitHub Pages'
      ],

      redesignNote: {
        before:
          'The original portfolio used static sections and limited project descriptions, which made it difficult to scale and did not clearly communicate problem-solving depth for each project.',
        after:
          'The redesigned portfolio introduces structured, reusable use case pages with a consistent layout, clearer storytelling (problem, solution, challenges), and improved navigation, resulting in a more professional and recruiter-friendly experience.'
      },

      challenges:
        'Balancing performance, maintainability, and design consistency while scaling the application and supporting dynamic routing across multiple views.',

      learnings: [
        'Designing scalable Angular applications with reusable layouts and data-driven routing',
        'Implementing dynamic routing for project and use case pages',
        'Managing shared UI state and theming across routed views',
        'Structuring frontend projects for long-term maintainability',
        'Deploying and maintaining Angular applications on GitHub Pages'
      ],

      githubUrl: 'https://github.com/Tevi22/Tevins-Portfolio',
      demoUrl: 'https://tevi22.github.io/Tevins-Portfolio/'
    },

    {
      slug: 'weather-app',
      title: 'Weather Forecast Web Application',
      imageUrl: 'assets/Images/weather-app.png',
      description:
        'Angular single-page application for retrieving and displaying real-time and forecasted weather data through a clean, responsive interface.',

      role: 'Frontend Developer',
      timeline: 'Under development',

      problem:
        'Many weather applications overwhelm users with cluttered layouts and excessive data, making it difficult to quickly understand current and upcoming conditions.',

      solution:
        'Built a lightweight Angular single-page application that consumes a public weather API and presents current conditions and forecasts in a clear, readable, and responsive layout focused on usability and simplicity.',

      userFlow: [
        'Load application',
        'Request weather data from API',
        'Display current conditions',
        'Render multi-day forecast',
        'Refresh data on update'
      ],

      features: [
        'Real-time weather data retrieval from a public API',
        'Multi-day forecast display',
        'API-driven data rendering',
        'Component-based UI architecture',
        'Responsive design for desktop and mobile',
        'Automatic refresh during development using Angular CLI'
      ],

      techStack: [
        'Angular 17',
        'TypeScript',
        'HTML5',
        'CSS',
        'Public Weather API',
        'Angular CLI'
      ],

      challenges:
        'Managing asynchronous API calls, handling loading and error states, and ensuring reliable data presentation while maintaining a clean and responsive user interface.',

      learnings: [
        'Consuming third-party APIs using Angular services',
        'Handling asynchronous data flows and state management',
        'Structuring Angular applications with reusable components',
        'Enhancing user experience through responsive layouts',
        'Using Angular CLI tooling for development, builds, and testing'
      ],

      githubUrl: 'https://github.com/Tevi22/Tevin/tree/master/Angular_Workspace/weather-app'
    }
  ];

  getUseCaseBySlug(slug: string): UseCase | undefined {
    return this.useCases.find(u => u.slug === slug);
  }
}

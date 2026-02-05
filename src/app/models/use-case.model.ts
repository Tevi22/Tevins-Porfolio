export interface UseCase {
  /** Routing */
  slug: string;

  /** Hero content */
  title: string;
  description: string;
  overview?: string;

  /** Optional hero image */
  imageUrl?: string;

  /** Project context */
  role: string;
  timeline: string;

  /** Problem → Solution framing */
  problem: string;
  solution: string;

  /** End-to-end user journey */
  userFlow: string[];

  /** Core functionality */
  features: string[];
  techStack: string[];

  /** Redesign context*/
  redesignNote?: {
    before: string;
    after: string;
  };

  /** Engineering reflection */
  challenges: string;
  learnings: string[];

  /** External links */
  githubUrl?: string;
  demoUrl?: string;
}

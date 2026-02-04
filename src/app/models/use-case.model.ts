export interface UseCase {
  slug: string;
  title: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  challenges: string;
  githubUrl?: string;
  demoUrl?: string;
}

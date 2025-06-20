export type Project = {
  id: string;
  title: string;
  time: string;
  link: string;
  tags: string[];
  description?: string;
  logo?: string;
  screenshots?: string[];
  thumbnails?: Record<string, { // Key is the recording identifier (e.g., "walkthrough", "demo")
      thumbnailUrl?: string;
    }>;
};

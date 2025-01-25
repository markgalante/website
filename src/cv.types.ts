type WorkExperience = {
  start: string;
  end?: string;
  title: string;
  company: string;
  location: string;
  description: string;
  skills?: string[];
};

type Language = {
  name: string;
  img: string;
};

export type SocialMediaPlatform =
  | "linkedin"
  | "github"
  | "email";

type CoreData = {
  aboutMe: string;
  workExperience: WorkExperience[];
  languages: Language[];
  contact: Array<{
    platform: SocialMediaPlatform;
    img: string;
    alt: string;
    link: string;
  }>;
};

type Metadata = {
  id: string;
  private: boolean;
  createdAt: string;
  name: string;
};

export type CV = {
  record: CoreData;
  metadata: Metadata;
};

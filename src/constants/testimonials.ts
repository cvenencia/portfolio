export type Testimonial = {
  title: string;
  description: string;
  stars: 1 | 2 | 3 | 4 | 5;
} & (
  | {
      imageUrl: string;
      imageAlt: string;
    }
  | {
      imageUrl?: undefined;
      imageAlt?: undefined;
    }
);
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    title: 'Spencer McMurtry',
    description:
      "Carlos is the best python developer I've ever worked with. He has a good work ethic, is very fast at what is does, and his code is thoughtful and efficient. We worked with a variety of platforms over a 6 month period. Some of the more notable tools included mongoDB, big query, google cloud functions and google cloud run. I look forward to continue working with him.",
    stars: 5,
    imageUrl: '/images/testimonials/spencer.jpg',
    imageAlt: 'Spencer McMurtry',
  },
  {
    title: 'Ramesh Dontha',
    description:
      'Carlos is very responsive and capable. Completed project as per requirements. Excellent resource.',
    stars: 5,
    imageUrl: '/images/testimonials/ramesh.jpg',
    imageAlt: 'Ramesh Dontha',
  },
  {
    title: 'Roy Klein',
    description:
      'Carlos made a tool for me that worked well on the first DB that I sent him. later on I just update the DB and it can still run flawless without any intervention.\n\nreal pro , will hire again if needed',
    stars: 5,
  },
];

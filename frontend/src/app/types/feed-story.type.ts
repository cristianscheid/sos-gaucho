export type FeedStory = {
  id: number;
  title: string;
  description: string;
  updatedAt: Date;
  images: { src: string }[];
};


export interface PostMetadata {
  title: string;
  date: string;
  tags: string;
  slug: string;
  wordcount: number;
  prev?: PostMetadata | null;
  next?: PostMetadata | null;
}
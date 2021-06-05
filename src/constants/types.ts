export type StoryItem = {
  type: string;
  src: string;
};

export type Story = {
  items: StoryItem[];
  idx: number;
  avatar: string;
};


export type OpenCarouselProps = { 
  idx: number
}
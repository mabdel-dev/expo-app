export interface Item {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const items: Item[] = [
  {
    id: '1',
    name: 'Mountain Landscape',
    description: 'Beautiful mountain vista with snow-capped peaks',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Ocean Sunset',
    description: 'Stunning sunset view over the ocean horizon',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Forest Trail',
    description: 'Peaceful walking trail through a dense forest',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Desert Dunes',
    description: 'Rolling sand dunes in a vast desert landscape',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    name: 'City Skyline',
    description: 'Modern city skyline at night with bright lights',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
  },
];
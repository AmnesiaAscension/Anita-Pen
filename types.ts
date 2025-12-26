
export interface Book {
  id: string;
  title: string;
  series: 'Troll' | 'Standalone';
  blurb: string;
  description: string;
  ageRange: string;
  themes: string[];
  coverImage: string;
  buyLinks: { label: string; url: string }[];
  isOtherWork?: boolean;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  heroImage: string;
  contentHtml: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  buyUrl: string;
  category: string;
}

export interface Event {
  id: string;
  name: string;
  dateDisplay: string;
  city: string;
  location: string;
  detailsUrl: string;
}

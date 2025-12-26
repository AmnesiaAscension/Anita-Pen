
import { Book, Post, Product, Event } from './types';

export const BOOKS: Book[] = [
  {
    id: "happy-halloween-troll",
    title: "Happy Halloween Troll",
    series: "Troll",
    blurb: "A spooky-sweet adventure about facing fears and finding friendship in the pumpkin patch.",
    description: "When Tiny Troll loses his favorite pumpkin, he must venture into the Whispering Woods. Along the way, he discovers that being brave doesn't mean you aren't scared—it means you keep going anyway! A perfect read for autumn nights.",
    ageRange: "3-7 years",
    themes: ["Halloween", "friendship", "bravery"],
    coverImage: "https://picsum.photos/seed/halloween/400/600",
    buyLinks: [{ label: "Amazon", url: "#" }, { label: "Signed Copy", url: "#" }]
  },
  {
    id: "merry-christmas-troll",
    title: "Merry Christmas Troll",
    series: "Troll",
    blurb: "Spread joy and kindness with the most helpful troll in the North Pole.",
    description: "Christmas is coming, but the festive lights have gone out! Tiny Troll and his forest friends work together to bring back the glow through simple acts of kindness. A heartwarming tale about the true meaning of the holidays.",
    ageRange: "3-7 years",
    themes: ["Christmas", "kindness", "giving"],
    coverImage: "https://picsum.photos/seed/christmas/400/600",
    buyLinks: [{ label: "Amazon", url: "#" }, { label: "Signed Copy", url: "#" }]
  },
  {
    id: "goodnight-troll",
    title: "Goodnight Troll",
    series: "Troll",
    blurb: "A soothing bedtime journey through the sleepy mountains.",
    description: "The sun is setting, and even trolls need their sleep. Follow Tiny Troll as he says goodnight to the moon, the stars, and the rustling leaves in this gentle, rhythmic story designed to help little ones drift into sweet dreams.",
    ageRange: "0-5 years",
    themes: ["bedtime", "calm", "comfort"],
    coverImage: "https://picsum.photos/seed/goodnight/400/600",
    buyLinks: [{ label: "Amazon", url: "#" }, { label: "Signed Copy", url: "#" }]
  },
  {
    id: "till-death-do-us-part",
    title: "Till Death Do Us Part",
    series: "Standalone",
    isOtherWork: true,
    blurb: "A mysterious thriller about old secrets and lasting vows.",
    description: "TBD: A gripping exploration of relationships and mysteries. Note: This title is intended for older readers (YA/Adult).",
    ageRange: "16+ years",
    themes: ["Mystery", "Thriller", "Relationships"],
    coverImage: "https://picsum.photos/seed/thriller/400/600",
    buyLinks: [{ label: "Amazon", url: "#" }]
  }
];

export const POSTS: Post[] = [
  {
    slug: "behind-the-scenes-troll",
    title: "Behind the Scenes: Creating the Troll Series",
    excerpt: "Ever wondered where Tiny Troll came from? It all started with a lost mitten and a very old oak tree.",
    author: "Anita Pen",
    date: "May 15, 2024",
    readTime: "5 min read",
    heroImage: "https://picsum.photos/seed/blog1/800/400",
    contentHtml: "<p>The journey of Tiny Troll began on a rainy Tuesday afternoon. I was walking through the local woods when I spotted a small, colorful mitten snagged on a branch...</p><p>I started thinking: what if a small creature lived here? What if they were misunderstood? Thus, our favorite mischievous friend was born.</p>"
  },
  {
    slug: "spooky-traditions",
    title: "Favorite Spooky Storytime Traditions",
    excerpt: "Halloween is my favorite time to read! Here are three ways to make storytime extra magical.",
    author: "Anita Pen",
    date: "October 10, 2024",
    readTime: "4 min read",
    heroImage: "https://picsum.photos/seed/blog2/800/400",
    contentHtml: "<p>There's nothing quite like the crackle of autumn leaves and a good book. Here are my top tips for a spooky (but not too scary!) reading night...</p>"
  },
  {
    slug: "how-i-outline",
    title: "How I Outline a Children’s Story",
    excerpt: "Writing for kids is all about rhythm, heart, and a little bit of magic. Here is my 5-step process.",
    author: "Anita Pen",
    date: "January 20, 2025",
    readTime: "7 min read",
    heroImage: "https://picsum.photos/seed/blog3/800/400",
    contentHtml: "<p>1. Start with the 'What if?'. 2. Find the heart. 3. Sketch the scenes. 4. Read it out loud. 5. Refine the mischief!</p>"
  }
];

export const PRODUCTS: Product[] = [
  { id: "p1", name: "Signed: Happy Halloween Troll", price: "$18.99", image: "https://picsum.photos/seed/shop1/300/300", buyUrl: "#", category: "Books" },
  { id: "p2", name: "Signed: Merry Christmas Troll", price: "$18.99", image: "https://picsum.photos/seed/shop2/300/300", buyUrl: "#", category: "Books" },
  { id: "p3", name: "Author Bookmark Set", price: "$5.99", image: "https://picsum.photos/seed/shop3/300/300", buyUrl: "#", category: "Merch" },
  { id: "p4", name: "Mini Poster (Troll Series)", price: "$12.99", image: "https://picsum.photos/seed/shop4/300/300", buyUrl: "#", category: "Art" },
  { id: "p5", name: "Sticker Pack", price: "$4.50", image: "https://picsum.photos/seed/shop5/300/300", buyUrl: "#", category: "Merch" },
  { id: "p6", name: "Troll Reading Tote", price: "$22.00", image: "https://picsum.photos/seed/shop6/300/300", buyUrl: "#", category: "Apparel" }
];

export const EVENTS: Event[] = [
  { id: "e1", name: "Library Storytime & Craft", dateDisplay: "March 12, 2025 - 10:00 AM", city: "Oakville", location: "Central Library", detailsUrl: "#" },
  { id: "e2", name: "School Visit: Creative Writing", dateDisplay: "April 5, 2025", city: "Riverdale", location: "Riverside Elementary", detailsUrl: "#" },
  { id: "e3", name: "Annual Children's Book Fair", dateDisplay: "June 20, 2025", city: "Metropolis", location: "Exhibition Hall", detailsUrl: "#" }
];

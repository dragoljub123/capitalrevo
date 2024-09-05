export interface Post {
  title: string;
  slug: { current: string };
  excerpt: string;
}
export interface Paket {
  title: string;
  description: string;
  listItems: string[];
}

export interface BlogPost {
  title: string;
  slug: { current: string };
  description: string;
  body: any; // Use a more specific type if available for blockContent
  image?: {
    asset: { url: string };
    alt: string;
  };
  createdDate: string;
  metaTitle?: string;
  metaDescription?: string;
  tags?: string[];
}

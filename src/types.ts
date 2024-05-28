export type Categories = 'phones' | 'tablets' | 'accessories';

export interface Description {
  title: string;
  text: string[];
}

export interface Product {
  id: number;
  category?: Categories;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color?: string;
  ram: string;
  year?: number;
  image: string;
  item?: ProductDetails;
}

export interface ProductDetails {
  id: string;
  category: Categories;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export interface QueryParams {
  query?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
  order?: 'asc' | 'desc';
  perPage?: string;
  page?: string;
  category?: string;
}

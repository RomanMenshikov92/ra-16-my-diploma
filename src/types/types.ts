export interface Product {
  imdbID: string;
  Title: string;
}

export interface BannerProps {
  src: string;
  alt: string;
}

export interface LogoProps {
  src: string;
  alt: string;
}

export interface ProductsState {
  loading: boolean;
  error: string | null;
  products: Product[];
  // productDetails: Product | null;
}

export interface RootState {
  products: ProductsState;
}

export interface Size {
  size: string;
  available: boolean;
}

export interface Product {
  id: number;
  category: number;
  title: string;
  images: string[];
  sku: string;
  manufacturer: string;
  color: string;
  material: string;
  reason: string;
  season: string;
  heelSize: string;
  price: number;
  oldPrice?: number;
  sizes: Size[];
}

export interface Category {
  id: number;
  title: string;
}

export interface ProductDetails {
  productDetails: Product;
  classes?: string;
}

export interface SizeProps {
  productDetails: Product;
  onSizeSelect: (size: string) => void;
}

export interface BannerProps {
  src: string;
  alt: string;
}

export interface LogoProps {
  src: string;
  alt: string;
}

export interface TitleProps {
  title: string;
  classes: string;
}

export interface ProductItemProps {
  product: Product;
  handleClick: (id: number) => void;
}

export interface ButtonOrderProps {
  text: string;
  onClick: () => void;
}

export interface ButtonCartProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

export interface FetchProductsArgs {
  offset?: string | number;
  query: string;
  category?: string;
}

export interface FetchProductDetailsArgs {
  id: number | string;
  offset?: string | number;
  category?: string;
}

export interface ProductsState {
  loading: boolean;
  error: string | null;
  searchQuery: string;
  products: Product[];
  isAllLoaded: boolean;
  productsTopSales: Product[];
  productsDetails: Product | null;
}

export interface CategoriesState {
  loading: boolean;
  error: string | null;
  categories: Category[];
  selectedCategory: string;
}

export interface CartState {
  loading: boolean;
  error: string | null;
  data: Product[];
  totalItems: number | null;
}

export interface RootState {
  products: ProductsState;
  categories: CategoriesState;
  cart: CartState;
}

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

export interface CartProduct {
  id: number;
  nano: string;
  title: string;
  selectedSize: string;
  selectedQuantity: number;
  price: number;
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

export interface BasketProps {
  count: number | null;
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

export interface QuantityProps {
  onQuantityChange: (quantity: number) => void;
  disabled: boolean;
}

export interface ButtonCartProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

export interface TableCartProps {
  data: CartProduct[];
  totalPrice: number;
  onDelete: (nanoId: string) => void;
}

export interface FormOrderProps {
  handleOrder: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ErrorProps {
  error: string;
  handleRetry?: () => void;
}

export interface OrderData {
  owner: {
    phone: string;
    address: string;
  };
  items: {
    id: number;
    price: number;
    count: number;
  }[];
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
  searchResult: boolean;
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
  message: string | null;
  cart: CartProduct[];
  totalItemsCount: number | null;
}

export interface RootState {
  products: ProductsState;
  categories: CategoriesState;
  cart: CartState;
}

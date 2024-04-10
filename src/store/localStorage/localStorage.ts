import { CartProduct } from '../../types/types';

export default function getStorageItems(): CartProduct[] {
  const saved: string | null = localStorage.getItem('items');
  if (saved !== null) {
    return JSON.parse(saved);
  }
  return [];
}

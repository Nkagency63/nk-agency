
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  features: string[];
  customizable: boolean;
  inStock: boolean;
  colorOptions?: string[];
  sizeOptions?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  customizations?: {
    color?: string;
    size?: string;
    text?: string;
  };
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  orderDate: string;
  customerInfo: {
    name: string;
    email: string;
    address: string;
  };
}

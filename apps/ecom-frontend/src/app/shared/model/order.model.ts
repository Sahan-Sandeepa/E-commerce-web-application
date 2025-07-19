export type OrderStatus = 'PENDING' | 'PAID' | 'SHIPPED' | 'CANCELLED';

export interface OrderedItems {
  name: string;
  quantity: number;
  price: number
}

export interface UserOrderDetail {
  publicId: string;
  status: OrderStatus;
  orderedItems: OrderedItems[];
}

export interface AdminOrderDetail {
  publicId: string;
  status: OrderStatus;
  email: string;
  address: string;
  orderedItems: OrderedItems[];
}
export interface User {
    id: number;
    name: string;
    email: string;
    address?: address;
  }

export interface address {
  id: string;
  user_id: number;
  street: string;
  state: string;
  city: string;
  zipcode: string;
}
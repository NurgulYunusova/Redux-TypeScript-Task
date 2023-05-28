export interface User {
  id: number;
  username: string;
  email: string;
  address: Address;
  company: Company;
}

export interface Address {
  street: string;
  city: string;
}

export interface Company {
  name: string;
}

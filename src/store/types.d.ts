export type SuburbItem = {
  name: string;
  id?: string;
};

export type Suburb = string;

export type Location = {
  name: string;
  type: string;
  suburb: Suburb;
};

export type Position = {
  lat: number;
  lng: number;
};

export type Address = {
  number: string;
  locationId: string;
  position?: Position;
};

export type Parcel = {
  count: number;
  color: string;
  type: string;
  size: 'S' | 'M' | 'L';
};

export type Delivery = {
  addressId: string;
  parcels: Parcel[];
  deliveredAt?: number;
};

export type FullAddress = Address & Location;

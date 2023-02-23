import type { Address, Delivery, Location, SuburbItem } from './types';

export function getSuburbId(suburb: SuburbItem | string) {
  return typeof suburb === 'object' ? suburb.name : suburb;
}

export function getLocationId({ name, type, suburb }: Location) {
  return `${name} ${type} ${suburb}`;
}

export function getAddressId(address: Address) {
  return `${address.number} ${address.locationId}`;
}

export function getDeliveryId(delivery: Delivery, delivered = false) {
  return delivered ? `${delivery.addressId} ${delivery.deliveredAt}` : delivery.addressId;
}

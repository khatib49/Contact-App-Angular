import {Address} from './address';
export interface contacts {
    id: number | string;
    name?: string;
    email?: string;
    phone?: string | string[];
    birthday?: string;
    website?: string;
    image?: string;
    address?: Address;
}
import {DeliveryObject} from './deliveryObject';
import {User} from './user';

export class Article implements DeliveryObject{
    name: string;
    pallet: boolean;
    amount: number;
    height: number;
    width: number;
    fragile: boolean;
    weight: number;
    client: User;

    constructor(name: string, pallet: boolean, amount: number, height: number, width: number, fragile: boolean, weight: number, client?: User) {
        this.name = name;
        this.pallet = pallet;
        this.amount = amount;
        this.height = height;
        this.width = width;
        this.fragile = fragile;
        this.weight = weight;
        this.client = client;
    }
}

import {DeliveryObject} from './deliveryObject';
import {User} from './user';

export class Person implements DeliveryObject{
    amount: number;
    client: User;
    id: string;


    constructor(amount: number, client: User, id: string) {
        this.amount = amount;
        this.client = client;
        this.id = id;
    }
}

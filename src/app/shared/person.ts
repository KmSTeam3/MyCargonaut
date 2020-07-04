import {DeliveryObject} from './deliveryObject';
import {User} from './user';

export class Person implements DeliveryObject{
    amount: number;
    client: User;


    constructor(amount: number, client: User) {
        this.amount = amount;
        this.client = client;
    }
}

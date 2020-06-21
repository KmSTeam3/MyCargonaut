import { User } from './user';
import {Vehicle} from './vehicle';
import {DeliveryObject} from './deliveryObject';

enum enumStatus{
    PREP,
    DELIVERY,
    DELIVERED
}

export class Shipment{

    $id: string;
    cargonaut: User;
    vehicle: Vehicle;
    deliveryObjectList: DeliveryObject[];
    start: string;
    goal: string;
    date: Date;
    startTime: string;
    status: enumStatus;


    constructor(cargonaut: User, vehicle: Vehicle, deliveryObject: DeliveryObject[], goal: string, date: Date, startTime: string) {
        this.cargonaut = cargonaut;
        this.vehicle = vehicle;
        this.deliveryObjectList = deliveryObject;
        this.goal = goal;
        this.date = date;
        this.startTime = startTime;
    }
}

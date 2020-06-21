import { User } from './user';
import {Vehicle} from './vehicle';
import {DeliveryObject} from './deliveryObject';
import {Article} from './article';
import {Person} from './person';

enum enumStatus{
    PREP,
    DELIVERY,
    DELIVERED
}

export class Shipment{

    $id: string;
    cargonaut: User;
    vehicle: Vehicle;
    passengerList: Person[];
    articleList: Article[];
    start: string;
    goal: string;
    date: Date;
    startTime: string;
    status: enumStatus;


    constructor(cargonaut: User, vehicle: Vehicle, passengerList: Person[], articleList: Article[], start: string, goal: string, date: Date, startTime: string) {
        this.cargonaut = cargonaut;
        this.vehicle = vehicle;
        this.passengerList = passengerList;
        this.articleList = articleList;
        this.start = start;
        this.goal = goal;
        this.date = date;
        this.startTime = startTime;
    }
}

import {User} from './user';
import {Vehicle} from './vehicle';
import {DeliveryObject} from './deliveryObject';
import {Article} from './article';
import {Person} from './person';


export enum enumStatus {
    PREP,
    DELIVERY,
    DELIVERED
}

export class Shipment {
    id: string;
    start: string;
    goal: string;
    date: Date;
    startTime: string;
    status: enumStatus;
    length: number;
    height: number;
    weight: number;
    pricePerKg: number;
    seat: number;
    pricePerSeat: number;
    cargonaut: string;
    vehicle: Vehicle;
    passengerList: Person[];
    articleList: Article[];


    constructor(id: string, cargonaut: string, vehicle: Vehicle, passengerList: Person[], articleList: Article[],
                start: string, goal: string, date: Date, startTime: string, length: number, height: number,
                weight: number, pricePerKg: number, seat: number, pricePerSeat: number) {
        this.id = id;
        this.start = start;
        this.goal = goal;
        this.date = date;
        this.startTime = startTime;
        this.length = length;
        this.height = height;
        this.weight = weight;
        this.pricePerKg = pricePerKg;
        this.seat = seat;
        this.pricePerSeat = pricePerSeat;
        this.cargonaut = cargonaut;
        this.vehicle = vehicle;
        this.passengerList = passengerList;
        this.articleList = articleList;
    }
}

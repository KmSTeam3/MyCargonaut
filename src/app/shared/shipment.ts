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

    start: string;
    goal: string;
    date: Date;
    startTime: string;
    status: enumStatus;
    length: number;
    height: number;
    weight: number;
    priceperkg: number;
    seat: number;
    priceperSeat: number;
    cargonaut: string;
    vehicle: Vehicle;
    passengerList: Person[];
    articleList: Article[];


    constructor(cargonaut: string, vehicle: Vehicle, passengerList: Person[], articleList: Article[], start: string, goal: string, date: Date, startTime: string,length: number,height: number, weight: number,priceperkg: number,seat: number,priceperSeat: number) {

        this.start = start;
        this.goal = goal;
        this.date = date;
        this.startTime = startTime;
        this.length= length;
        this.height = height;
        this.weight = weight;
        this.priceperkg= priceperkg;
        this.seat= seat;
        this.priceperSeat= priceperSeat;
        this.cargonaut = cargonaut;
        this.vehicle = vehicle;
        this.passengerList = passengerList;
        this.articleList = articleList;
    }
}

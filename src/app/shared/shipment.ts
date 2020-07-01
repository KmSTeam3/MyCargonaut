import {User} from './user';
import {Vehicle} from './vehicle';
import {DeliveryObject} from './deliveryObject';
import {Article} from './article';
import {Person} from './person';


export enum enumStatus {
    BAR,
    PAYPAL,
    VORKASSE
}

/**
 *  Shipment object class -
 *  Represents a shipment created by a user
 */
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

    /**
     * Constructor for the shipment object
     * @param cargonaut id of the user who wants to deliver/drive the shipment
     * @param vehicle the vehicle with which the shipment is transported
     * @param passengerList users can drive with the cargonaut they are listed in this list
     * @param articleList list of articles of the shipment
     * @param start start address of the shipment
     * @param goal goal address of the shipment
     * @param date date on which the shipment starts
     * @param startTime time for the shipment start
     * @param length available length for articles on the shipment vehicle
     * @param height available height for articles on the shipment vehicle
     * @param weight available weight for articles on the shipment vehicle
     * @param pricePerKg price per kg for articles
     * @param seat how much passengers can be transported
     * @param pricePerSeat price per passenger
     * @param status which payment method the user has choosen
     * @param id identification of the shipment
     */
    constructor(cargonaut: string, vehicle: Vehicle, passengerList: Person[], articleList: Article[],
                start: string, goal: string, date: Date, startTime: string, length: number, height: number,
                weight: number, pricePerKg: number, seat: number, pricePerSeat: number, status?: number, id?: string) {
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
        this.id = id;
        this.status = status;
    }
}

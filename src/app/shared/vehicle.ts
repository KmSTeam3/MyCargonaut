import { User } from './user';
export class Vehicle{

    licensePlate: string;
    name: string;
    holderId: string;
    load: number;
    maxLoad: number;
    volume: number;
    seats: number;
    maxSeats: number;

    constructor(licensePlate: string, name: string, holderId: string, load: number, maxLoad, volume: number, seats: number, maxSeats: number){
        this.licensePlate = licensePlate;
        this.name = name;
        this.holderId = holderId;
        this.load = load;
        this.maxLoad = maxLoad;
        this.volume = volume;
        this.seats = seats;
        this.maxSeats = maxSeats;
    }
}

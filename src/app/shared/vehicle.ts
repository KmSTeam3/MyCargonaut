import { User } from './user';
export class Vehicle{

    $id: string;
    name: string;
    holder: User;
    load: number;
    maxLoad: number;
    volume: number;
    seats: number;
    maxSeats: number;

    constructor(name: string, holder: User, load: number, maxLoad, volume: number, seats: number, maxSeats: number){
        this.name = name;
        this.holder = holder;
        this.load = load;
        this.maxLoad = maxLoad;
        this.volume = volume;
        this.seats = seats;
        this.maxSeats = maxSeats;
    }
}

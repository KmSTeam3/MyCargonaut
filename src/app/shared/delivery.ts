export class Delivery{
    start: string;
    goal: string;
    date: Date;
    length: number;
    height: number;
    weight: number;
    priceperkg: number;
    seat: number;
    priceperSeat: number;
    cargonaut: string;

    constructor(from: string, too:string, date:Date, length:number, height:number, weight:number, priceperkg:number, seat:number, priceperSeat:number, cargonaut:string){
        this.start = from;
        this.goal = too;
        this.date= date;
        this.length = length;
        this.height= height;
        this.weight= weight;
        this.priceperkg= priceperkg;
        this.seat= seat;
        this.priceperSeat= priceperSeat;
        this.cargonaut= cargonaut;

    }
}
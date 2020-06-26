export class Delivery{
    from: string;
    too: string;
    date: Date;
    length: number;
    height: number;
    weight: number;
    priceperkg: number;
    seat: number;
    priceperSeat: number;
    ownerId: string;

    constructor(from: string, too:string, date:Date, length:number, height:number, weight:number, priceperkg:number, seat:number, priceperSeat:number, ownerId:string){
        this.from = from;
        this.too = too;
        this.date= date;
        this.length = length;
        this.height= height;
        this.weight= weight;
        this.priceperkg= priceperkg;
        this.seat= seat;
        this.priceperSeat= priceperSeat;
        this.ownerId= ownerId;

    }
}
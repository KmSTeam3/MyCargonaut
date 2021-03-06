/**
 * Class representing a user
 */
import {Shipment} from './shipment';

export class User {

    id: string;
    title: string;
    fName: string;
    lName: string;
    street: string;
    housenumber: number;
    postalcode: number;
    city: string;
    email: string;
    rating: number;
    bookings: string[] = [];


    constructor(id: string, title: string, fName: string, lName: string, street: string, housenumber: number, postalcode: number, city: string, email: string) {
        this.id = id;
        this.title = title;
        this.fName = fName;
        this.lName = lName;
        this.street = street;
        this.housenumber = housenumber;
        this.postalcode = postalcode;
        this.city = city;
        this.email = email;
    }

   // getRating(): number {
   //     return this.rating;
   // }

   // setRating(value: number) {
   //     this.rating = value;
   // }

}

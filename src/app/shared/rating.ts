export class Rating {
    id: string;
    points: number;
    description: string;

    constructor(points: number, description: string, id?: string, ) {
        this.id = id;
        this.points = points;
        this.description = description;
    }
}

import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from '@angular/fire/firestore';
import {Rating} from './rating';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserService} from './user.service';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  ratingCollection: AngularFirestoreCollection<Rating>;
  subscription1: Subscription;
  subscription2: Subscription;

  static prepare(rating: Rating): Rating{
    const copy = {...rating};
    delete copy.id;
    copy.points = copy.points || null;
    copy.description = copy.description || null;
    return copy;
  }

  constructor(private afs: AngularFirestore, private userservice: UserService) { }


  persist(rating: Rating, userId: string){
    this.ratingCollection = this.afs.collection<Rating>('user/' + userId + '/ratings');
    this.ratingCollection.add(RatingService.prepare(rating)).then(() => {
      this.updateAverage(userId);
    });
  }

  findAll(userId: string): Observable<Rating[]>{
    this.ratingCollection = this.afs.collection<Rating>('user/' + userId + '/ratings');
    const changeActions: Observable<DocumentChangeAction<Rating>[]> = this.ratingCollection.snapshotChanges();
    return changeActions.pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return {...data} as Rating;
        }))
    );
  }

  updateAverage(userID: string){
    let ratings: Rating[];
    let average = 0;
    let user: User;
    this.subscription1 = this.findAll(userID).subscribe((value => {
     ratings = value;
     for (const rating of ratings){
       average += rating.points;
     }
     average = average / ratings.length;
     this.subscription2 = this.userservice.getUser(userID).subscribe((value1 => {
       user = value1;
       user.rating = average;
       this.userservice.update(user);
       this.subscription2.unsubscribe();
     }));
     this.subscription1.unsubscribe();
   }));

  }


}

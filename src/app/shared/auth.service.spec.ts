import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {IonicModule} from '@ionic/angular';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';

describe('AuthService', () => {
  let service: AuthService;
  const credentials = { email: 'klausi@web.de', password: '123456' };

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      IonicModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      AngularFireAuthModule,
    ]
  }));

  beforeEach(() => {
    service = TestBed.inject(AuthService);
  });

  it('should be true', () => {
    expect(true).toBeTruthy();
  });
});

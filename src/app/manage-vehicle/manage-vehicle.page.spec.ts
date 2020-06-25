import { environment } from "./../../environments/environment.prod";
import { User } from "./../shared/user";
import { RouterTestingModule } from "@angular/router/testing";

import { VehicleService } from "./../shared/vehicle.service";
import { AuthService } from "./../shared/auth.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { ManageVehiclePage } from "./manage-vehicle.page";
import { routes } from "./manage-vehicle-routing.module";
import { Vehicle } from "../shared/vehicle";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { AngularFireModule } from "@angular/fire";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const angularFirestoreStub = {
  collection: jasmine.createSpy("collection"),
};

describe("ManageVehiclePage", () => {
  let component: ManageVehiclePage;
  let fixture: ComponentFixture<ManageVehiclePage>;
  let authService: AuthService;
  let vehicleService: VehicleService;
  let angularFireStore: AngularFirestore;

  const value = { email: "test@test.de", password: "123456" };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageVehiclePage],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        ManageVehiclePage,
        { provide: AuthService },
        { provide: VehicleService },
      ],
    }).compileComponents();
  }));

  it("should be true", () => {
    expect(true).toBeTruthy();
  });

  it("should be empty", () => {
    //let router = TestBed.get(Router) ;
    //let location = TestBed.get(Location);
    component = TestBed.inject(ManageVehiclePage);
    authService = TestBed.inject(AuthService);
    vehicleService = TestBed.inject(VehicleService);
    //router = TestBed.inject(RouterTestingModule );
    const testComponent = new ManageVehiclePage(vehicleService, authService);
    expect(component.listVehicle).toEqual([]);
  });

  it("should be no empty", function (done) {
    //let router = TestBed.get(Router) ;
    //let location = TestBed.get(Location);
    component = TestBed.inject(ManageVehiclePage);
    authService = TestBed.inject(AuthService);
    vehicleService = TestBed.inject(VehicleService);
    angularFireStore = TestBed.get(AngularFirestore);
    //router = TestBed.inject(RouterTestingModule);
    const testComponent = new ManageVehiclePage(vehicleService, authService);

    authService.login(value).then(() => {
      authService.checkAuthState().subscribe((user) => {
        const vehicle: Vehicle = new Vehicle(
          "test",
          "asd",
          user.uid,
          123,
          123,
          123,
          123,
          123
        );
        const testListVehicle: Vehicle[] = [vehicle];
        component.renderList(user.uid);
        expect(component.listVehicle).toEqual(testListVehicle);
      });
      done();
    });
  });
});

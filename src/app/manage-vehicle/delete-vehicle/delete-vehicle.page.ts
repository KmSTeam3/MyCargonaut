import { Vehicle } from 'src/app/shared/vehicle';
import { VehicleService } from './../../shared/vehicle.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-vehicle',
  templateUrl: './delete-vehicle.page.html',
  styleUrls: ['./delete-vehicle.page.scss'],
})
export class DeleteVehiclePage implements OnInit {

  @Input() id: string;
  vehicle: Vehicle;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.findVehicle(this.id);
  }

  deleteVehicle(){
    this.vehicleService.delete(this.vehicle);
  }

  findVehicle(licensePlate: string){
    this.vehicleService.getVehicle(licensePlate).subscribe(data => {
     this.vehicle = data;
   });
}
}

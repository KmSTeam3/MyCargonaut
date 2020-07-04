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
  @Input() uId: string;
  vehicle: Vehicle;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.findVehicle(this.id, this.uId);
  }

  /**
   * Send delete to VehicleService with current vehicle and User ID
   */
  deleteVehicle(){
    this.vehicleService.delete(this.vehicle, this.uId);
  }

  /**
   * Search for selected Vehicle
   * @param licensePlate Current vehicle ID
   * @param id Current user ID
   */
  findVehicle(licensePlate: string, id: string){
    this.vehicleService.getVehicle(licensePlate, id).subscribe(data => {
     this.vehicle = data;
   });
}
}

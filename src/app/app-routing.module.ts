import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { DeviceComponent } from './device/device.component';
import { HomeComponent } from './home/home.component';
import { RecordComponent } from './record/record.component';
import { SensorComponent } from './sensor/sensor.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
{ path: '',
  component: UserComponent},
{ path:'client', 
  component: ClientComponent},
{ path: 'sensor',
  component: SensorComponent},
{ path: 'user',
  component: UserComponent},
{ path: 'home',
  component: HomeComponent},
{ path: 'record',
  component: RecordComponent},
{ path: 'device',
  component: DeviceComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

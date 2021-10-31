import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SensorComponent } from './sensor/sensor.component';
import { SensorFormComponent } from './sensor/sensor-form/sensor-form.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { DeviceComponent } from './device/device.component';
import { DeviceFormComponent } from './device/device-form/device-form.component';
import { RecordComponent } from './record/record.component';
import { RecordFormComponent } from './record/record-form/record-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientFormComponent,
    SensorComponent,
    SensorFormComponent,
    HomeComponent,
    UserComponent,
    UserLoginComponent,
    HeaderComponent,
    DeviceComponent,
    DeviceFormComponent,
    RecordComponent,
    RecordFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

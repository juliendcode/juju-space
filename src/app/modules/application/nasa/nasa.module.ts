import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing.module';
import { NasaComponent } from './nasa.component';
import { NasaapiService } from './nasaapi.service';



@NgModule({
  declarations: [NasaComponent, ],
  imports: [
    CommonModule,
    NasaRoutingModule
  ],
  exports: [NasaComponent],
  providers: [NasaapiService, ]
})
export class NasaModule { }

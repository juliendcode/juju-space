import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsapiService } from './newsapi.service';
import { NewsRoutingModule } from './news.routing.module';



@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule],
  exports: [NewsComponent],
  providers: [NewsapiService]
})
export class NewsModule { }

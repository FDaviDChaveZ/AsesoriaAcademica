import { Component, OnInit } from '@angular/core';
import { SolicitudeResponse } from '../../models/solicitude-response.interface';
import { SolicitudeService } from '../../services/solicitude.service';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-solicitude-list',
  standalone: true,
  imports: [CommonModule,CardComponent, TranslateModule],
  templateUrl: './solicitude-list.component.html',
  styleUrl: './solicitude-list.component.scss'
})
export class SolicitudeListComponent implements OnInit{

  SolicitudeResponseData:SolicitudeResponse[]=[];


  constructor(private _solicitudeService:SolicitudeService
  ){

  }

  ngOnInit(): void {
    this.getSolictude();
  }

  getSolictude(){
    this._solicitudeService.getSolicitude("B100F2C0-9374-49FA-A3FD-53DB637A40AE").subscribe(resp=>{
      if(resp.success){
        this.SolicitudeResponseData=resp.data;
        console.log("Data: ", this.SolicitudeResponseData);
      }
    })
  }

}

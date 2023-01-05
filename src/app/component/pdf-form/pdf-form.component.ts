import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-pdf-form',
  templateUrl: './pdf-form.component.html',
  styleUrls: ['./pdf-form.component.sass']
})
export class PdfFormComponent implements OnInit {
  dataUser: any;

  constructor(public globalService:GlobalService) { }

  ngOnInit(): void {
    this.dataUser = JSON.parse(this.globalService.getdataUserPdfReturn() as '');
    console.log(this.dataUser);
    window.print(); 
  }

}

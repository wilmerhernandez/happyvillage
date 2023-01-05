import { Component, OnInit } from '@angular/core';
  import { getDatabase, ref, onValue, child, get} from "firebase/database";
import { GlobalService } from 'src/app/service/global.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  dataUser: any;

  constructor(public globalService:GlobalService) { }
  saveData(item:any){
    console.log(this.globalService.getdataUserPdfReturn());
    this.globalService.setdataUserPdf(item);
  }
  readData(){
    const db = getDatabase();
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, async (snapshot) => {
      const data =  await snapshot.val();
      this.dataUsers =Object.values(data)
      return Object.values(data);
    });
    
  }
  set dataUsers(data:any){
    this.dataUser = data;
  }
  ngOnInit(): void {
    console.log(this.readData())
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  
  constructor(private http:HttpClient,public servi:GitService){
  }
  datos:any
  twitterShare:string;
  ngOnInit(): void {
   
    this.http.get("https://notas-ftxk.onrender.com/repos").subscribe((data:any)=>{
  
      
      this.datos=data.userData;
     
      console.log(this.datos);
        })
  }

}

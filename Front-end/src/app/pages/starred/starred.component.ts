import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.scss']
})
export class StarredComponent implements OnInit{


  constructor(private http:HttpClient,public servi:GitService){
  }
  datos:any
  ngOnInit(): void {
    this.http.get("https://notas-ftxk.onrender.com/starred").subscribe((data:any)=>{
      this.datos=data.userData;
        })
  }
}

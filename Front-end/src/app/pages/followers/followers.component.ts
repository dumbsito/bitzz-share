import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit{

  
  constructor(private http:HttpClient,public servi:GitService){
  }
  datos:any
  ngOnInit(): void {
    this.http.get("https://notas-ftxk.onrender.com/followers").subscribe((data:any)=>{
      console.log(data);
      
      this.datos=data.userData;
        })
  }
}

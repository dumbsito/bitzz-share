import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit{


  constructor(private http:HttpClient,public servi:GitService){
  }
  datos:any
  ngOnInit(): void {
    this.http.get("https://notas-ftxk.onrender.com/following").subscribe((data:any)=>{
      console.log(data);
      
      this.datos=data.userData;
        })
  }
}

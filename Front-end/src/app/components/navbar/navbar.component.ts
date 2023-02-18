import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public servi:GitService,private router:Router,private http:HttpClient){

  }
  openLogout:boolean=false
  open(){
     this.openLogout=!this.openLogout;
  }

  logout(){
    this.http.get("https://notas-ftxk.onrender.com/logout").subscribe(data=>{
         
         
    })
  }
}  

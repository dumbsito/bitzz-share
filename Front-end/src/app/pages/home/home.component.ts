import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 // @ViewChild ("grilla") grilla:ElementRef;
   div:any;
   datos:any;
   urlTwitter;
   urlGithub;
 /* hacerFilas(filas, columnas) {
    
    this.grilla.nativeElement.style.setProperty("--grid-rows", filas);
    this.grilla.nativeElement.style.setProperty("--grid-cols", columnas);
    for (let i = 0; i < filas * columnas; i++) {
    this.div = document.createElement("div");
    this.grilla.nativeElement.appendChild(this.div).className = "item active";
    }
  }*/
constructor(private http:HttpClient,public servi:GitService){

  
}
  ngOnInit(): void {

 
  /*  console.log(this.grilla.nativeElement);
    this.hacerFilas(16, 16); */

    this.http.get("https://notas-ftxk.onrender.com/userData").subscribe((data:any)=>{
      console.log(data.userData);
      
  this.datos=data.userData;
  this.servi.avatar_url=data.userData.avatar_url;
  this.servi.name=data.userData.name;
  this.urlGithub=data.userData.html_url
  this.urlTwitter=`https://twitter.com/${data.userData.twitter_username}`
  this.servi.showNav=true;
    })
   }
}

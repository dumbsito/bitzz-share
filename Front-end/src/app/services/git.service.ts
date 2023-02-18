import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class GitService {
  avatar_url:string;
  name:string

  despliegue:boolean=false
  repositories:boolean=false;
  people:boolean=false;
  starred:any[];
  showNav:boolean=false
  constructor(private http:HttpClient) { 

  }

  private token:string;
  logout(){
    this.token=""
    localStorage.removeItem("ACCESS_TOKEN")
  }

  private saveToken(token:string,expiresIn:string){
    localStorage.setItem("ACCESS_TOKEN",token)
    localStorage.setItem("EXPIRES_IN",expiresIn)

  this.token=token;
  }

  private getToken(){
    if(!this.token){
      this.token=localStorage.getItem("ACCEES_TOKEN")
    }
    return this.token
  }
}

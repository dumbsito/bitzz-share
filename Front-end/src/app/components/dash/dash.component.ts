import { Component, ElementRef, ViewChild } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  @ViewChild('angle') angle: ElementRef;
  @ViewChild('angle2') angle2: ElementRef;
  constructor(public servi:GitService){
   
  }

  status:boolean=false
  desplegar(){
    this.servi.despliegue=!this.servi.despliegue
    }
    showRepositories(){
      this.angle.nativeElement.classList.toggle('translate')
      this.servi.repositories=!this.servi.repositories
    }
    showPeople(){
      this.angle2.nativeElement.classList.toggle('translate')
      this.servi.people=!this.servi.people
    }
}


/*
<div>
    <div  [ngClass]="servi.despliegue ?'dashed':'dash'">

        <div class="title">
           <i (click)="desplegar()" class="fa-solid arrow fa-arrow-right" [ngClass]="{'fa-arrow-right':!servi.despliegue,'fa-arrow-left':servi.despliegue}"></i>
        </div>

        <ul>
            <li
                routerLink="/dashboard" routerLinkActive="active"
            ><img src="/assets/dashboard.svg" alt=""><span *ngIf="servi.despliegue">Dashboard</span></li>
            <li
                  routerLinkActive="active"
            ><img src="/assets/yourRepositories.svg" alt=""><span *ngIf="servi.despliegue">Repositories</span></li>
            <li 
            routerLink="/dashboard/personal" routerLinkActive="active"
            ><img src="/assets/repositories.svg" alt=""><span *ngIf="servi.despliegue">Your Repositories</span></li>
            <li 
              routerLink="/dashboard/starred" routerLinkActive="active"
            ><img src="/assets/starred.svg" alt=""><span *ngIf="servi.despliegue">Starred</span></li>
            <li 
               routerLinkActive="active"
            ><img src="/assets/followers.svg"> <span *ngIf="servi.despliegue">People</span></li>
            <li
           routerLink="/dashboard/followers" routerLinkActive="active"
         ><img src="/assets/followers.svg"> <span *ngIf="servi.despliegue">Followers</span></li>
         <li 
         routerLink="/dashboard/following" routerLinkActive="active"
      > <span *ngIf="servi.despliegue">Following</span></li>
      <li 
      routerLink="/dashboard/search" routerLinkActive="active"
   ><img src="/assets/search.svg"> <span *ngIf="servi.despliegue">Search</span></li>
        </ul>

    </div>
</div>

<div class="bottom-content">
            <li class="">
                <a href="#">
                    <i class='bx bx-log-out icon' ></i>
                    <span class="text nav-text">Logout</span>
                </a>
            </li>

            <li class="mode">
                <div class="sun-moon">
                    <i class='bx bx-moon icon moon'></i>
                    <i class='bx bx-sun icon sun'></i>
                </div>
                <span class="mode-text text">Dark mode</span>

                <div class="toggle-switch">
                    <span class="switch"></span>
                </div>
            </li>
            
        </div>

*/
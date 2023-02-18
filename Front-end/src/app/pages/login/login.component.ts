import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/git.service';
import queryString from 'query-string';

import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
datos:any;
  
constructor(private gitService:GitService,private router:Router){
     console.log(this.router.url)
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
}


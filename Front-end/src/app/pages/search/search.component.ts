import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
query:string;
datos:any;
showSearch:boolean=false;
constructor(private http:HttpClient){

}
  ngOnInit(): void { 
  }

  search(){
    this.http.get(`https://api.github.com/users/${this.query}`)
    .subscribe((data:any)=>{
      
      console.log(data);
      
 this.datos=data
 this.showSearch=true;
    })
    
  }
}

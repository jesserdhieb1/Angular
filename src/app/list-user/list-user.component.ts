import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {ActivatedRoute} from "@angular/router";
import { SharedDataService } from '../services/shared-data.service';

//importation de la classer User

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {//on utilise export pour faire l'importation de classe (public)
//firstName : string='ahmed';modification dans tsconfig.json pour ne pas initialiser la variable
list:User[];
allUser:User[];
inputCategory : string ;
  constructor(private route:ActivatedRoute ,  private data: SharedDataService) {//injection dans le constructeur

  }

  ngOnInit(): void {
    this.allUser = this.data.list;
    this.route.paramMap.subscribe(
      (params)=>
      {
        let category = params.get('category')
        this.list=this.allUser.filter(user=>user.accountCategory === category)
      }
    );


  }
  delete(user : User){
    let i =this.list.indexOf(user);
    this.list.splice(i,1);
  }

}

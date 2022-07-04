import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.scss']
})
export class HousesListComponent implements OnInit {
  
  Houses:any = [];
  constructor(private crudService: CrudService) { }
  ngOnInit(): void {
    this.crudService.GetHouses().subscribe(res => {
      console.log(res)
      this.Houses =res;
    });    
  }
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteHouse(id).subscribe((res) => {
        this.Houses.splice(i, 1);
      })
    }
  }
}
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.scss']
})
export class AddHouseComponent implements OnInit {
  houseForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.houseForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
	    rooms: [''],
	    occupied: ['']
    })
  }
  ngOnInit() { }
  onSubmit(): any {
    this.crudService.AddHouse(this.houseForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/houses-list'))
      }, (err) => {
        console.log(err);
    });
  }
}
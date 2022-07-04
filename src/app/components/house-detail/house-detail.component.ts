import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetHouse(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        price: res['price'],
        description: res['description'],
	      rooms: res['rooms'],
	      occupied: res['occupied']
      });
    });
    this.updateForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
      rooms: [''],
      occupied: ['']
    })
  }
  ngOnInit() { }
  onUpdate(): any {
    this.crudService.updateHouse(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/houses-list'))
      }, (err) => {
        console.log(err);
    });
  }
}
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  recordForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudservice: CrudService
  ) {
    this.recordForm = this.formBuilder.group({
      occupancy: [''],
      house_street: [''],
      house_city: [''],
      house_state: [''],
      house_zip: [''],
      census_year: [''],
      census_taker: ['']
    })
  }
  ngOnInit(): void { }

  onSubmit(): any {
    this.crudservice.AddRecord(this.recordForm.value)
    .subscribe({
      error: (err) => console.log(err)
    })
  this.ngZone.run(() => this.router.navigateByUrl('/records-list'))
  }
}

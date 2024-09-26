import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css']
})
export class RecordsListComponent implements OnInit {

  Records: any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetRecords().subscribe(res => {
      console.log(res)
      this.Records =res;
    });    
  }

  onDelete(id: any): any {
    this.crudService.DeleteRecord(id)
      .subscribe(res => {
        console.log(res)
      })
      location.reload();
  }
}

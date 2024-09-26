import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  updateForm: FormGroup;
  bookId: string;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute
  ) {
    // Get the book ID from the URL
    this.bookId = this.activatedRoute.snapshot.paramMap.get('id')!;
    
    this.updateForm = this.formBuilder.group({
      isbn: [''],
      title: [''],
      author: [''],
      description: [''],
      published_year: [''],  
      publisher: ['']        
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.updateBook(this.bookId, this.updateForm.value).subscribe({
      next: () => {
        console.log('Book updated successfully');
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'));
      },
      error: (err) => {
        console.log('Error updating book:', err);
      }
    });
  }
}

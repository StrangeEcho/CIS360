import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecordsListComponent } from './components/records-list/records-list.component';
import { AddRecordComponent } from './componenents/add-record/add-record.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'records-list' },
  { path: 'records-list', component: RecordsListComponent },
  { path: 'add-record', component: AddRecordComponent },
  { path: '', pathMatch: 'full', redirectTo: 'delete-record/:id' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

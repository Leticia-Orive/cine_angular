import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActoresListComponent } from './actores-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ActoresListComponent],
  imports: [FormsModule, CommonModule],
})
export class ActoresModule {}

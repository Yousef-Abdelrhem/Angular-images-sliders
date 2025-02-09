import { Component, Input, SimpleChanges } from '@angular/core';
import { student } from './model';

@Component({
  selector: 'app-user-table',
  imports: [],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  @Input() oneStudent : student | null  = null;
  Students : student[] | null = [];
  addStudent(): void {    
    if(this.oneStudent){
      this.Students?.push(this.oneStudent);
    }
  }
    ngOnChanges(changes: SimpleChanges){
      this.addStudent();
    }
}

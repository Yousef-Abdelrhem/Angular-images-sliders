import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';
import { AllInOneComponent } from './Components/Day3/all-in-one/all-in-one.component';
import { RegisterationComponent } from './Day4/registeration/registeration.component';
import { student } from './Day4/registeration/model';
import { StudentComponent } from './Day4/student/student.component';
import { AddUserComponent } from './Day4-FormControl/AddForm/add-user/add-user.component';
import { UserTableComponent } from './Day4-FormControl/userTable/user-table/user-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FirstComponent , SecondComponent, AllInOneComponent ,
  RegisterationComponent ,StudentComponent, AddUserComponent , UserTableComponent]
})
export class AppComponent {
  title = 'demo';
  student: student | null = null;
  Students : student[]  = [];
  receiveStudent (data : any) {
    this.student = data;
    this.Students.push(data);
    console.log(this.Students);
  }


}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';
import { AllInOneComponent } from './Components/Day3/all-in-one/all-in-one.component';
import { RegisterationComponent } from './Day4/registeration/registeration.component';
import { student } from './Day4/registeration/model';
import { StudentComponent } from './Day4/student/student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FirstComponent , SecondComponent, AllInOneComponent ,
  RegisterationComponent ,StudentComponent]
})
export class AppComponent {
  title = 'demo';
  Students : student[] = [];
  student: student = { id: 0, name: '', age: 0 };
  receiveStudent ($event : any) {
    this.Students.push($event);
    console.log(this.Students);
  }
}

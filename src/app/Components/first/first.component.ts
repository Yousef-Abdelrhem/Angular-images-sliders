import { Component } from "@angular/core";
import { SecondComponent } from "../second/second.component";

@Component({
    selector : 'firstComp',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css'],
})

export class FirstComponent {
    data = "";
    displayData(event : any){
        this.data = event.target.value;
    }
    Reset(){
        this.data = "";
        let textInput = document.querySelector('.textInput');
    }
}
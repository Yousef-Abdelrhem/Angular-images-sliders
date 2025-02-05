import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  counter = 0;
  imgs = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg'
  ]; 
  image = this.imgs[this.counter];
  intervalId: any = null;
  next(){
    if(this.counter < 2){
      this.counter++;
      this.image = this.imgs[this.counter];
    }   
  }
  prev(){
    if(this.counter > 0){
      this.counter--;
      this.image = this.imgs[this.counter];
    } 
  }
  play(){
    if(this.intervalId === null){
      this.intervalId = setInterval(()=>{
          this.counter = (this.counter + 1) % this.imgs.length;
          this.image = this.imgs[this.counter];
      },1000);
    }
   
  }
  stop(){
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}

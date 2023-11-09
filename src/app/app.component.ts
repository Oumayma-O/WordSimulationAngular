import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word';
  color= 'black';
  size= '14px';
  font= 'arial';
  weight ='1px';

  changeColor(inputColor: HTMLInputElement) {
   this.color= inputColor.value ;
  }

  changeSize(inputSize: HTMLInputElement) {
  this.size= inputSize.value + 'px';
  }

  changeWeight(inputWeight: HTMLInputElement) {
    this.weight= inputWeight.value + 'px';

  }

  changeFont(inputFont: HTMLSelectElement) {
   this.font = inputFont.value;
  }
}

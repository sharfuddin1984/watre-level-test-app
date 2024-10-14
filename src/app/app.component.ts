import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  textHeading:string = "Drink Water";  

  waterLevel: number = 0;
  maxLimit: number = 1000;

  addWater() {
    if (this.waterLevel < this.maxLimit) {
      this.waterLevel += 100;
    }
  }
  removeWater() {
    if (this.waterLevel >= 100) {
      this.waterLevel -= 100;
    }
  }
}

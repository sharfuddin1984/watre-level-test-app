import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test-app'; 
  textHeading:string = "Drink Water";  

  waterLevel: number = 0; // Initial water level in ml
  maxLimit: number = 1000; // Maximum water level limit

  // Local storage key
  private storageKey = 'waterLevel';

  ngOnInit(): void {
    const storedWaterLevel = localStorage.getItem(this.storageKey);
    if (storedWaterLevel !== null) {
      this.waterLevel = +storedWaterLevel; // Convert to number
    }
  }

  // Calculate the current water level percentage
  get waterLevelPercentage(): number {
    return (this.waterLevel / this.maxLimit) * 100;
  }

  // Method to add 100 ml
  addWater() {
    if (this.waterLevel < this.maxLimit) {
      this.waterLevel += 100;
      this.saveWaterLevel(); // Save the updated water level to local storage
    }
  }

  // Method to remove 100 ml
  removeWater() {
    if (this.waterLevel >= 100) {
      this.waterLevel -= 100;
      this.saveWaterLevel(); // Save the updated water level to local storage
    }
  }  

   // Save the current water level to local storage
   private saveWaterLevel() {
    localStorage.setItem(this.storageKey, this.waterLevel.toString());
  }

  // Method to reset the water level
resetWaterLevel() {
  this.waterLevel = 0;
  localStorage.removeItem(this.storageKey); // Remove from local storage
}
}

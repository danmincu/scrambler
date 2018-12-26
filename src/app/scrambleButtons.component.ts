import { Component, Input } from '@angular/core';
import { AppComponent } from './app.component'

@Component({
  selector: 'scrambleButtons',
  template: `
    <div style="font-size : 30px; width: 100%; height: 55px;">
    <ng-container>
    <button *ngFor="let item of name.split(''); index as i;let odd=odd; let even=even" (click)="scramble(i)"
    class="btn btn-sm btn-primary"
    [ngClass]="{orange: odd, blue:even}">^</button>
    </ng-container>
    </div>
  `,
  styles: [` 
   
  button {
    padding: 0px;
    width: 27.03px;  
  }

  .orange { 
    background-color: orange; 
  }
  .blue { background-color: #007bff; }`]
})

export class ScrambleButtonsComponent {
  @Input() name: string;
  appC : AppComponent;
  constructor(app : AppComponent) {      
      this.appC = app;     
      //todo - create 28 buttons dinamically 
  }

  scramble(i : number)
  {
     this.appC.scramble(i);
  }
}
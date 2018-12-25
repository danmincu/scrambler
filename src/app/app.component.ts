import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  title = 'Scrambler';
  array_lines = [];  
  lines = [];
  rows = 3;
  deviation: number;
  noOfTries: number;
  textLines = [];  


  constructor() {
      this.initializeGame();
      this.display();
      this.noOfTries = 0;
  }

  initializeGame() {
    this.textLines[0] = 'the whole art of war consists'.toLowerCase().replace(/ /g, '.');
    this.textLines[1] = 'of guessing at what is on the'.toLowerCase().replace(/ /g, '.');
    this.textLines[2] = 'other side of the hill       '.toLowerCase().replace(/ /g, '.');
    this.array_lines.push(this.textLines[0].split(''));
    this.array_lines.push(this.textLines[1].split(''));   
    this.array_lines.push(this.textLines[2].split(''));

    for(var i=0;i< 28; i++)
    {
       Math.floor((Math.random() * 4) + 1);
       this.scramble(i);
    }

  }

  display()
  {
      this.lines = [];      
      for (var value of this.array_lines) {       
        this.lines.push(value.join(''));
      }
  }

  calculateDeviation()
  {
    this.deviation = 0;
    for (var index=0; index < this.rows; index++)
    {
        var line = this.array_lines[index];
        for(var x =0; x < line.length; x++)
        {
          if (line[x] != this.textLines[index][x])
          {
            this.deviation++;
            break;
          }
        }        
    }
  }

  scramble(i) {
    this.noOfTries++;
    var indexes = [];
    var values = [];

    for (var index=0; index < this.rows; index++)
    {
        var v = this.array_lines[index][i];
        if (v != '.')
        {
          values.push(v);
          indexes.push(index);
        }
    }

    indexes.reverse();
    var v = values.pop();
    values.reverse();
    values.push(v);

    do
    {
      this.array_lines[indexes.pop()][i] = values.pop();
    }
    while (values.length > 0)

    this.display();
    this.calculateDeviation();
  }

}
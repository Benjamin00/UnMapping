import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'orth-ui';

  //Food: Halal, Veggie, Vegan, Mexican, Chinese
  //Family: Kids, Married, Single
  //Age: old or young
  //Activity Level: Gym

  // private preferences: any = [
  //   {"marital_status": "single", "kids": false, "food": ["vegan","halal"], "age": "young"},"Activity Level:"["gym","parks"]},
  //   {"marital_status": "single", "kids": false, "food": ["vegan","halal"], "age": "young"},"Activity Level:"["gym","parks"]}
  //   {"marital_status": "single", "kids": false, "food": ["vegan","halal"], "age": "young"},"Activity Level:"["gym","parks"]}
  //   {"marital_status": "single", "kids": false, "food": ["vegan","halal"], "age": "young"},"Activity Level:"["gym","parks"]}
  // ];

  private preferences: any = [
    "Single", "Married", "Kids", "Vegan", "Halal", "18-25", "25+","Parks", "Gyms",
  ];

  constructor() { }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
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

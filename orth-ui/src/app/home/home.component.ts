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
    {
    	item: "Single",
    	selected: false,
    	id: "singleImg"
    },
     {
    	item: "Married",
    	selected: false,
    	id: "marriedImg"

    }, {
    	item: "Kids",
    	selected: false,
    	id:"kidsImg"
    },{
    	item: "Vegan",
    	selected: false,
    	id:"veganImg"
    }, {
    	item: "Halal",
    	selected: false,
    	id:"halalImg"
    }, {
    	item: "18-25",
    	selected: false,
    	id:"eighteentwentyfiveImg"
    }, {
    	item: "25+",
    	selected: false,
    	id:"twentyfiveImg"
    },{
    	item: "Parks",
    	selected: false,
    	id:"parksImg"
    }, {
    	item: "Gyms",
    	selected: false,
    	id:"gymsImg"
    }
 
  ];

  constructor() { }

  ngOnInit() {
  } 

  public onClick(obj:any) {
  	obj.selected = !obj.selected;
  	console.log(obj);

  }

} 

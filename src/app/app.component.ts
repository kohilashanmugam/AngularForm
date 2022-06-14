import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirsttdf';

  countryList=[
    {"countryname":"India"},
    {"countryname":"USA"},
    {"countryname":"England"}
  ];
  onSubmit(myForm:NgForm){
    console.log(myForm);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  loaded: boolean = false;
  public userDetails = {
    userName : "John Papa",
    bio : "Code Eat Sleep and Repeat",
    twitter: "www.twitter.com/johndoe",
    github: "https://github.com/john",
    location: "Bangalore, India"
  }
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true;
    }, 3000);
  }

}

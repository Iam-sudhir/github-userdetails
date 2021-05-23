import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  loaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true;
    }, 3000);
  }

}

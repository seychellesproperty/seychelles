import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent implements OnInit {

  constructor(private router: Router) { }
  imageIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/home']) .then(() => { window.location.reload(); });
  }

}

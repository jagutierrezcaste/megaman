import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [NavService]
})
export class NavComponent implements OnInit  {

  public nav;

  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.navService.listBooks().subscribe(data => {
        console.log(data);
        this.nav = data.items;
    })
  }

}

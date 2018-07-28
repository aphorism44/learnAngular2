import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-para-page1',
  templateUrl: './para-page1.component.html',
  styleUrls: ['./para-page1.component.css']
})
export class ParaPage1Component implements OnInit {

  text = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  gotoPage2() {
    this.router.navigate(
      ['/para-page2', this.text]
      , { relativeTo: this.route, skipLocationChange: true }

    );
  }

  ngOnInit() {
  }

}

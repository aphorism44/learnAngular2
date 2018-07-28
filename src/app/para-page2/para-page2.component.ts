import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-para-page2',
  templateUrl: './para-page2.component.html',
  styleUrls: ['./para-page2.component.css']
})
export class ParaPage2Component implements OnInit {

  text;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(text => this.text = text.params);
  }

  goBack() {
    this.router.navigate(['/para-page1']);
  }

}

import { Component, OnInit } from '@angular/core';
import { AreaCalcService } from '../area-calc.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  providers: [AreaCalcService]
})
export class AreaComponent {

  circleRadius: number = 0;
  squareBase: number = 0;
  rectangleBase: number = 0;
  rectangleHeight: number = 0;
  triangleBase: number = 0;
  triangleHeight: number = 0;
  trapezoidBase1: number = 0;
  trapezoidBase2: number = 0;
  trapezoidHeight: number = 0;

  constructor(private areaCalc: AreaCalcService) { }

  calcCircle() {
    return this.areaCalc.circle(this.circleRadius);
  }
  calcSquare() {
    return this.areaCalc.square(this.squareBase);
  }
  calcRectangle() {
    return this.areaCalc.rectangle(this.rectangleBase, this.rectangleHeight);
  }
  calcTriangle() {
    return this.areaCalc.triangle(this.triangleBase, this.triangleHeight);
  }
  calcTrapezoid() {
    return this.areaCalc.trapezoid(this.trapezoidBase1, this.trapezoidBase2, this.trapezoidHeight);
  }

}

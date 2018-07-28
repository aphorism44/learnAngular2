import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaPage1Component } from './para-page1.component';

describe('ParaPage1Component', () => {
  let component: ParaPage1Component;
  let fixture: ComponentFixture<ParaPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParaPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

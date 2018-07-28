import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaPage2Component } from './para-page2.component';

describe('ParaPage2Component', () => {
  let component: ParaPage2Component;
  let fixture: ComponentFixture<ParaPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParaPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

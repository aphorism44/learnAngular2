import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpMockComponent } from './http-mock.component';

describe('HttpMockComponent', () => {
  let component: HttpMockComponent;
  let fixture: ComponentFixture<HttpMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

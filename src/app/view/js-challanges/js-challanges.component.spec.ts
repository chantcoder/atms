import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsChallangesComponent } from './js-challanges.component';

describe('JsChallangesComponent', () => {
  let component: JsChallangesComponent;
  let fixture: ComponentFixture<JsChallangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsChallangesComponent]
    });
    fixture = TestBed.createComponent(JsChallangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

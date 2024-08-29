import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuiDashboardComponent } from './hui-dashboard.component';

describe('HuiDashboardComponent', () => {
  let component: HuiDashboardComponent;
  let fixture: ComponentFixture<HuiDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HuiDashboardComponent]
    });
    fixture = TestBed.createComponent(HuiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

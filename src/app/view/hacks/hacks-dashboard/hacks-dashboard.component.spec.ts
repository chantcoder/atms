import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacksDashboardComponent } from './hacks-dashboard.component';

describe('HacksDashboardComponent', () => {
  let component: HacksDashboardComponent;
  let fixture: ComponentFixture<HacksDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HacksDashboardComponent]
    });
    fixture = TestBed.createComponent(HacksDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

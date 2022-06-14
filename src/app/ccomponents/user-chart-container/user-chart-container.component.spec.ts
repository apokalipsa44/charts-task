import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChartContainerComponent } from './user-chart-container.component';

describe('UserChartContainerComponent', () => {
  let component: UserChartContainerComponent;
  let fixture: ComponentFixture<UserChartContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChartContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

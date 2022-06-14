import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDataPlaceholderComponent } from './users-data-placeholder.component';

describe('UsersDataPlaceholderComponent', () => {
  let component: UsersDataPlaceholderComponent;
  let fixture: ComponentFixture<UsersDataPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDataPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDataPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualEventsComponent } from './actual-events.component';

describe('ActualEventsComponent', () => {
  let component: ActualEventsComponent;
  let fixture: ComponentFixture<ActualEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

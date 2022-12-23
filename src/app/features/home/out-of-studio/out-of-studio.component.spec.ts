import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfStudioComponent } from './out-of-studio.component';

describe('OutOfStudioComponent', () => {
  let component: OutOfStudioComponent;
  let fixture: ComponentFixture<OutOfStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutOfStudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutOfStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideStudioComponent } from './outside-studio.component';

describe('OutsideStudioComponent', () => {
  let component: OutsideStudioComponent;
  let fixture: ComponentFixture<OutsideStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsideStudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsideStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

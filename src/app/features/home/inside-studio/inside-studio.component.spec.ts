import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideStudioComponent } from './inside-studio.component';

describe('InsideStudioComponent', () => {
  let component: InsideStudioComponent;
  let fixture: ComponentFixture<InsideStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideStudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsideStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

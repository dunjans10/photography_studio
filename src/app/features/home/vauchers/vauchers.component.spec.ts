import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VauchersComponent } from './vauchers.component';

describe('VauchersComponent', () => {
  let component: VauchersComponent;
  let fixture: ComponentFixture<VauchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VauchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VauchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

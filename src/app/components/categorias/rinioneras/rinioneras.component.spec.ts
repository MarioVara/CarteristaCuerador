import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RinionerasComponent } from './rinioneras.component';

describe('RinionerasComponent', () => {
  let component: RinionerasComponent;
  let fixture: ComponentFixture<RinionerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RinionerasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RinionerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

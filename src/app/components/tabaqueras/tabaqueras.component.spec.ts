import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabaquerasComponent } from './tabaqueras.component';

describe('TabaquerasComponent', () => {
  let component: TabaquerasComponent;
  let fixture: ComponentFixture<TabaquerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabaquerasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabaquerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

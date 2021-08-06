import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularcrComponent } from './popularcr.component';

describe('PopularcrComponent', () => {
  let component: PopularcrComponent;
  let fixture: ComponentFixture<PopularcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularcrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

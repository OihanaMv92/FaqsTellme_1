import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfBasComponent } from './conf-bas.component';

describe('ConfBasComponent', () => {
  let component: ConfBasComponent;
  let fixture: ComponentFixture<ConfBasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfBasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfBasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

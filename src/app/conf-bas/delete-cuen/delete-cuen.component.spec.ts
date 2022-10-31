import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCuenComponent } from './delete-cuen.component';

describe('DeleteCuenComponent', () => {
  let component: DeleteCuenComponent;
  let fixture: ComponentFixture<DeleteCuenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCuenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCuenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

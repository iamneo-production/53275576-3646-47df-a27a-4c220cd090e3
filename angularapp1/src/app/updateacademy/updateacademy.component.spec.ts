import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateacademyComponent } from './updateacademy.component';

describe('UpdateacademyComponent', () => {
  let component: UpdateacademyComponent;
  let fixture: ComponentFixture<UpdateacademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateacademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateacademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyRobotComponent } from './toy-robot.component';
import { FormsModule } from '@angular/forms';

describe('ToyRobotComponent', () => {
  let component: ToyRobotComponent;
  let fixture: ComponentFixture<ToyRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ToyRobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

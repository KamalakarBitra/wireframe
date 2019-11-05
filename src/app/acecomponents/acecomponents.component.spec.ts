import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcecomponentsComponent } from './acecomponents.component';

describe('AcecomponentsComponent', () => {
  let component: AcecomponentsComponent;
  let fixture: ComponentFixture<AcecomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcecomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcecomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

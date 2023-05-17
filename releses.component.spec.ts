import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelesesComponent } from './releses.component';

describe('RelesesComponent', () => {
  let component: RelesesComponent;
  let fixture: ComponentFixture<RelesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelesesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

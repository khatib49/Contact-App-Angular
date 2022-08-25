import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodymodalComponent } from './bodymodal.component';

describe('BodymodalComponent', () => {
  let component: BodymodalComponent;
  let fixture: ComponentFixture<BodymodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodymodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

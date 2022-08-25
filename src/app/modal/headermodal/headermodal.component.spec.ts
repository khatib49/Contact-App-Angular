import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadermodalComponent } from './headermodal.component';

describe('HeadermodalComponent', () => {
  let component: HeadermodalComponent;
  let fixture: ComponentFixture<HeadermodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadermodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

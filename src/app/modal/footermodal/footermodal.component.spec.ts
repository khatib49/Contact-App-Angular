import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootermodalComponent } from './footermodal.component';

describe('FootermodalComponent', () => {
  let component: FootermodalComponent;
  let fixture: ComponentFixture<FootermodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootermodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

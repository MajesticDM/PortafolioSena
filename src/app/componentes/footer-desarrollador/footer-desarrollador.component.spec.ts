import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDesarrolladorComponent } from './footer-desarrollador.component';

describe('FooterDesarrolladorComponent', () => {
  let component: FooterDesarrolladorComponent;
  let fixture: ComponentFixture<FooterDesarrolladorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FooterDesarrolladorComponent]
    });
    fixture = TestBed.createComponent(FooterDesarrolladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

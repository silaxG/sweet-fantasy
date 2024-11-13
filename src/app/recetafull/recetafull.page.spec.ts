import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetafullPage } from './recetafull.page';

describe('RecetafullPage', () => {
  let component: RecetafullPage;
  let fixture: ComponentFixture<RecetafullPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetafullPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearecetaPage } from './creareceta.page';

describe('CrearecetaPage', () => {
  let component: CrearecetaPage;
  let fixture: ComponentFixture<CrearecetaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

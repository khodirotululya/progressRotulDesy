/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KoleksiComponent } from './koleksi.component';

describe('KoleksiComponent', () => {
  let component: KoleksiComponent;
  let fixture: ComponentFixture<KoleksiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoleksiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoleksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

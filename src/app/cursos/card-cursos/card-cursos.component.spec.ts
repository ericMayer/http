/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardCursosComponent } from './card-cursos.component';

describe('CardCursosComponent', () => {
  let component: CardCursosComponent;
  let fixture: ComponentFixture<CardCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

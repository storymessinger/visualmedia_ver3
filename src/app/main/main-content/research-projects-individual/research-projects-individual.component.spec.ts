/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResearchProjectsIndividualComponent } from './research-projects-individual.component';

describe('ResearchProjectsIndividualComponent', () => {
  let component: ResearchProjectsIndividualComponent;
  let fixture: ComponentFixture<ResearchProjectsIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchProjectsIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchProjectsIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

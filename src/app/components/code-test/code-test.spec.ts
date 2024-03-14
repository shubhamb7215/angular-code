import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTest } from './code-test';

describe('CodeTest', () => {
  let component: CodeTest;
  let fixture: ComponentFixture<CodeTest>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeTest ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

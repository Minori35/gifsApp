import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyimagenComponent } from './lazyimagen.component';

describe('LazyimagenComponent', () => {
  let component: LazyimagenComponent;
  let fixture: ComponentFixture<LazyimagenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyimagenComponent]
    });
    fixture = TestBed.createComponent(LazyimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

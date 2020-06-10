import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarenComponent } from './karen.component';

describe('KarenComponent', () => {
  let component: KarenComponent;
  let fixture: ComponentFixture<KarenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

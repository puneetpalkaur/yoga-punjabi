import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhsissiComponent } from './ghsissi.component';

describe('GhsissiComponent', () => {
  let component: GhsissiComponent;
  let fixture: ComponentFixture<GhsissiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhsissiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhsissiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

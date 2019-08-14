import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppostulantesComponent } from './toppostulantes.component';

describe('ToppostulantesComponent', () => {
  let component: ToppostulantesComponent;
  let fixture: ComponentFixture<ToppostulantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppostulantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppostulantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

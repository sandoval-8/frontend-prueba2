import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCentrosComponent } from './aside-centros.component';

describe('AsideCentrosComponent', () => {
  let component: AsideCentrosComponent;
  let fixture: ComponentFixture<AsideCentrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideCentrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideCentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudeListComponent } from './solicitude-list.component';

describe('SolicitudeListComponent', () => {
  let component: SolicitudeListComponent;
  let fixture: ComponentFixture<SolicitudeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

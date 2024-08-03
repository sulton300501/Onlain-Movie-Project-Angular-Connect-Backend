import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeatherComponent } from './create-teather.component';

describe('CreateTeatherComponent', () => {
  let component: CreateTeatherComponent;
  let fixture: ComponentFixture<CreateTeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

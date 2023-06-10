import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicleSocialMediaComponent } from './cicle-social-media.component';

describe('CicleSocialMediaComponent', () => {
  let component: CicleSocialMediaComponent;
  let fixture: ComponentFixture<CicleSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicleSocialMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicleSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCardItemComponent } from './album-card-item.component';

describe('AlbumCardListingComponent', () => {
  let component: AlbumCardItemComponent;
  let fixture: ComponentFixture<AlbumCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumCardItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

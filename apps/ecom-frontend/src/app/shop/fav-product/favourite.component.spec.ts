import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouriteComponent } from './favourite.component';

describe('FavouriteComponent', () => {
  let component: FavouriteComponent;
  let fixture: ComponentFixture<FavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the FavouriteComponent', () => {
    expect(component).toBeTruthy();
  });
});

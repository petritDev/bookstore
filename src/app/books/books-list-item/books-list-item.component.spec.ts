import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListItemComponent } from './books-list-item.component';

describe('BooksListItemComponent', () => {
  let component: BooksListItemComponent;
  let fixture: ComponentFixture<BooksListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

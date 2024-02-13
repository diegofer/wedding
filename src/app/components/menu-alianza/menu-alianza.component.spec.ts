import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlianzaComponent } from './menu-alianza.component';

describe('MenuAlianzaComponent', () => {
  let component: MenuAlianzaComponent;
  let fixture: ComponentFixture<MenuAlianzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MenuAlianzaComponent]
    });
    fixture = TestBed.createComponent(MenuAlianzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

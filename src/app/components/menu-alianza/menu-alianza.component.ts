import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-alianza',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu-alianza.component.html',
  styleUrls: ['./menu-alianza.component.scss']
})
export class MenuAlianzaComponent {
  @Input() public $menuItems!:Observable<any[]>;
  public expandir:boolean = false;
}

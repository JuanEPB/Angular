import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IMenuOption } from '../../core/interfaces';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']  // ← corregido
})
export class Navbar {

  menuOptions: IMenuOption[] = [
    { label: 'Home', route: '/home' },
    { label: 'Counter', route: '/counter' },
    { label: 'Structural Directives', route: '/structural-directives' },
    { label: 'Attribute Directives', route: '/attribute-directives' },
    { label: 'Data Binding', route: '/data-binding' },
    { label: 'Service', route: '/service' },
    { label: 'Cursos', route: '/cursos' },
    { label: 'Pipes', route: '/pipes' },
  ];
}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cursos',
  imports: [],
  templateUrl: './cursos.component.html',
})
export class CursosComponent {

    id = signal(0)
  name = signal('')
  duration = signal(0)
  nivel = signal<[]>([])
  cuatrimestre = signal(0)
 }

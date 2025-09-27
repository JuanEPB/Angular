import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-structural-directives-page',
  imports: [],
  templateUrl: './structural-directives-page.component.html',
})
export class StructuralDirectivesPageComponent {
  isVisible = signal(true);

  toggleVisibility() {
    this.isVisible.update(v => !v);
  }

  viewdMode = signal<'none' | 'list' | 'grid'>('none');

  setViewMode(mode: 'none' | 'list' | 'grid') {
    this.viewdMode.set(mode);
  }


  users = signal([
    { id: 1, name: 'Alice' ,role: 'admin' },
    { id: 2, name: 'Bob' ,role: 'user' },
    { id: 3, name: 'Charlie' ,role: 'user' },
  ]);
 }

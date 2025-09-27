import { CounterPageComponent } from './pages/CounterPage/CounterPage.component';
import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { StructuralDirectivesPageComponent } from './pages/structural-directives-page/structural-directives-page.component';
import { AttributeDirectivesPageComponent } from './pages/attribute-directives-page/attribute-directives-page.component';
import { DataBindingPageComponent } from './pages/data-binding-page/data-binding-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'counter', component: CounterPageComponent },
  { path: 'structural-directives', component: StructuralDirectivesPageComponent },
  { path: 'attribute-directives', component: AttributeDirectivesPageComponent },
  { path: 'data-binding', component: DataBindingPageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  
];

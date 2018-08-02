import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule' },
  { path: 'books', loadChildren: './books/books.module#BooksModule' },

  { path: '', pathMatch: 'full', redirectTo: 'home' }, /* Cuando no tiene valor en la ruta */
  { path: '**', pathMatch: 'full', redirectTo: 'home' }  /* Para cualquier otro caso */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

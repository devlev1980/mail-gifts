import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'birthday',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/gift.module').then(module => module.GiftModule)
  },
  {
    path: 'birthdays',
    loadChildren: () => import('./birthday/birthday.module').then(module => module.BirthdayModule)
  },
  {
    path: 'holidays',
    loadChildren: () => import('./holiday/holiday.module').then(module => module.HolidayModule)
  },
  {
    path: 'love',
    loadChildren: () => import('./love/love.module').then(module => module.LoveModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

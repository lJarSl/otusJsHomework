import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
	{path: '', redirectTo: '/game', pathMatch: 'full'},
	{path: 'game', component: GameComponent},
	{path: 'settings', component: SettingsComponent},
	{path: 'store', component: StoreComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

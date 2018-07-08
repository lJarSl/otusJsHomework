import { Injectable } from '@angular/core';
import { Settings } from './settings';
import { SETTINGS } from './mock-settings';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
});

export class SettingsService {

  constructor() {
	console.log(SETTINGS);
   }

  	getSettings(): Settings {
		return SETTINGS;
	}
}

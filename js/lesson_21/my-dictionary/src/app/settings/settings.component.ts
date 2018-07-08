import { Component, OnInit } from '@angular/core';
import { Settings } from '../settings';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	settings: Settings;

	getSettings(): void {
	  //this.settings = this.SettingsService.getSettings();
		//console.log(this.settings);
	  //this.SettingsService.getSettings()
      //	.subscribe(settings => this.settings = settings);
	}

  constructor(private SettingsService: SettingsService) { }

  ngOnInit() {
  	this.getSettings();
  }

}

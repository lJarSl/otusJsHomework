import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'menu-tabs',
  templateUrl: './menu-tabs.component.html',
  styleUrls: ['./menu-tabs.component.css']
})
export class MenuTabsComponent implements OnInit {

	const menuTabs: object [] = [
		{ id: 1, path: '/game', title: 'Go'},
		{ id: 2, path: '/settings', title: 'Settings'},
		{ id: 3, path: '/store', title: 'Recently Added'}
	];

	const selectedSecion: number = 1;

	onSelect(path: string): boolean {
		return path === location.pathname;
	};

	constructor(
	    private location: Location
	) {}

	ngOnInit() { 

	}

}

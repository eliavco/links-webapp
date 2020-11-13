import { Component, OnInit } from '@angular/core';
import { LinksService } from './../../data/links/links.service';
import { Link } from './../../models/link';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	cuts: Link[] = [];

	constructor(
		private linksService: LinksService
	) { }

	ngOnInit(): void {
		this.initializeLinks();
	}

	initializeLinks(): void {
		this.linksService.links.subscribe(links => {
			this.cuts = links;
		});
	}

	deleteLink(link: string): void {
		this.linksService.deleteLink(link);
	}

}

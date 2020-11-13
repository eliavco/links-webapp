import { Component, OnInit } from '@angular/core';
import { LinksService } from './../../data/links/links.service';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
	name = '';
	link = '';

	constructor(
		private linksService: LinksService
	) { }

	ngOnInit(): void {
	}

	addLink(): void {
		this.linksService.addLink(this.name, this.link);
		this.name = ''; this.link = '';
	}

}

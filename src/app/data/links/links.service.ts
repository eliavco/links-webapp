import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Link } from './../../models/link';

@Injectable({
	providedIn: 'root'
})
export class LinksService {
	private readonly initialState = localStorage.links ? JSON.parse(localStorage.links) || [] : [];
	// tslint:disable-next-line: variable-name
	private readonly _links = new BehaviorSubject<Link[]>(this.initialState);
	readonly links = this._links.asObservable();
	get currentLinks(): Link[] {
		return this._links.getValue();
	}

	constructor() { }

	addLink(name, link): void {
		const links = [{ name, link }, ...this.currentLinks];
		this.updateLinks(links);
	}

	deleteLink(link): void {
		const links = this.currentLinks.filter(cut => cut.link !== link);
		this.updateLinks(links);
	}

	private updateLinks(links): void {
		this._links.next(links);
		localStorage.links = JSON.stringify(links);
	}
}

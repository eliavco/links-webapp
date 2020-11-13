import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { LinksService } from './data/links/links.service';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CreateComponent,
		ListComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [
		LinksService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

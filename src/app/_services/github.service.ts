import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username: string;
	private client_id = '6ad6987e7edb2f7599b6';
	private client_secret = '1984ffe8d3a16f2d9450a8ddde14dbc639275be0';

	constructor(private _http: Http) {
		console.log("Github profile accessed...");
		this.username = 'isaacshrestha';
	}

	getUser() {
		return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
			.map( res => res.json());
	}

	getRepos() {
		return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
			.map( res => res.json());
	}

	updateUser(username:string) {
		this.username = username;
	}

}

import { Component, OnInit } from '@angular/core';
import { GithubService } from '../_services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any[];
  username: string;

  constructor( private _githubService: GithubService) { 
  	/* Initializing getUser() and getRepos() here provides only specific user
    this._githubService.getUser().subscribe(user => {
  		this.user = user;
      console.log(user);
  		});

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(repos);
      });*/

      this.user = false;
  }

  searchUser() {
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
      //console.log(user);
      });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      //console.log(repos);
      });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { PagesService } from '../services/pages.service';
@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss']
})
export class RepositoryDetailsComponent implements OnInit {
  repositoryData: any;
  page = 1;
  loaded: boolean = false;
  constructor(private pageService: PagesService) { }

  ngOnInit(): void {
    this.getUserRepository();
  }
  getUserRepository() {
    this.loaded = false;
    const url = 'https://api.github.com/users/johnpapa/repos?per_page=10&page=' + this.page;
    this.pageService.getRepoData(url).subscribe((data) => {
      this.repositoryData = Object.assign(data);
      setTimeout(() => {
        this.loaded = true;
      }, 3000);
    });
  }
  loadPage(data: any) {
    this.page = data;
    this.getUserRepository();
  }
}

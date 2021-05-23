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
  constructor(private pageService: PagesService) { }

  ngOnInit(): void {
    this.getUserRepository();
  }
  getUserRepository() {
    const url = 'https://api.github.com/users/johnpapa/repos?per_page=10&page=' + this.page;
    console.log(url);
    this.pageService.getRepoData(url).subscribe((data) => {
      this.repositoryData = Object.assign(data);
      console.log(this.repositoryData)
    });
  }
  loadPage(data: any) {
    this.page = data;
    this.getUserRepository();
  }
}

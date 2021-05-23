import { Component, OnInit } from '@angular/core';
import { PagesService } from '../services/pages.service'
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
    this.getUserRepository()
  }
  getUserRepository() {
    this.pageService.getRepoData().subscribe((data) => {
      console.log(data)
      this.repositoryData = data;
    })
  }
}

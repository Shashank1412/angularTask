import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-list-post-table',
  templateUrl: './list-post-table.component.html',
  styleUrls: ['./list-post-table.component.css']
})
export class ListPostTableComponent implements OnInit {
  commentData: any = []
  tableSetting: any = []
  pageDetails: any = "";
  comments: string ="comments"
  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.getCommentList()
    this.pageDetails = 'comments'
  }
  getCommentList() {
    this.api.getListRequest('comments')
      .subscribe((response: any) => {
        console.log(response)
        this.commentData = response
        console.log("key", this.tableSetting, response[0])
      })
    console.log("key", this.tableSetting)
  }

}

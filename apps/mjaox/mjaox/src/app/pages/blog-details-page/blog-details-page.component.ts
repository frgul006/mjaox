import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../services/graphcms.model';
import { GraphCMSService } from '../../services/graphcms.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'mjaox-blog-details-page',
  templateUrl: './blog-details-page.component.html',
  styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent implements OnInit {
  post$: Observable<Post>;

  constructor(
    private graphSvc: GraphCMSService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.graphSvc.getBlogPostByPrettyUrl(params.get('id'))
      )
    );
  }
}

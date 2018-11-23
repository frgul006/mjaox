import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '@mjaox/shared/mjaox-model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GraphCMSService } from '../../services/graphcms.service';

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
        this.graphSvc.getPostByPrettyUrl(params.get('id'))
      )
    );
  }
}

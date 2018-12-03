import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Post } from '@mjaox/shared/mjaox-model';
import { Observable } from 'rxjs';
import { GraphCMSService } from '../../services/graphcms.service';

@Component({
  selector: 'mjaox-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(
          ':enter',
          stagger('120ms', [
            animate(
              '240ms ease-in',
              keyframes([
                style({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: 'translateX(35px)',
                  offset: 0.3
                }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class BlogPageComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private graphSvc: GraphCMSService) {}

  ngOnInit() {
    this.posts$ = this.graphSvc.getAllPosts();
  }
}

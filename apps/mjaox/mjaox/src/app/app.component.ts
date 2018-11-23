import { Component } from '@angular/core';
import { MjaoxToolbarLink, MjaoxToolbarOptions } from '@mjaox/shared/mjaox-ui';

@Component({
  selector: 'mjaox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mjaox-mjaox';

  toolbarOptions: MjaoxToolbarOptions;

  constructor() {
    this.toolbarOptions = {
      links: [
        {
          icon: 'code',
          label: 'Blog',
          route: ''
        } as MjaoxToolbarLink
      ]
    };
  }
}

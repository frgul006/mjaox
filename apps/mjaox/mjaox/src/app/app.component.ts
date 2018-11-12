import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MjaoxToolbarOptions, MjaoxToolbarLink } from '@mjaox/shared/mjaox-ui';

@Component({
  selector: 'mjaox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mjaox-mjaox';

  items: Observable<any[]>;
  toolbarOptions: MjaoxToolbarOptions;

  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
    this.toolbarOptions = {
      links: [
        {
          icon: 'code',
          label: 'Blog',
          route: ''
        } as MjaoxToolbarLink,
        {
          icon: 'info',
          label: 'About',
          route: '/about'
        } as MjaoxToolbarLink
      ]
    };
  }
}

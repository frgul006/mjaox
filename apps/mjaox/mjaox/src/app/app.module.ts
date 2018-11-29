import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  SharedMjaoxUiFooterModule,
  SharedMjaoxUiToolbarModule
} from '@mjaox/shared/mjaox-ui';
import { NxModule } from '@nrwl/nx';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { GraphQLModule } from './graphql.module';
import { PagesModule } from './pages';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NxModule.forRoot(),
    MarkdownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'Mjaox'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features,
    SharedMjaoxUiToolbarModule,
    SharedMjaoxUiFooterModule,
    PagesModule,
    GraphQLModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

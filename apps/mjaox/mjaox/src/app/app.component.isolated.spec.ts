import { AppComponent } from './app.component';
import {
  AngularFirestore,
  QueryFn,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import {
  FirebaseApp,
  FirebaseFirestore,
  FirebaseZoneScheduler
} from '@angular/fire';
import { Observable, empty, of } from 'rxjs';
import { TestBed, inject } from '@angular/core/testing';

describe('AppComponent', () => {
  it('should exist', () => {
    const component = new AppComponent();
  });
});

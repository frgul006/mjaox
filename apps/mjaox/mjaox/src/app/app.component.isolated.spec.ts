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

const data = of({ name: 'Hey' });

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
};

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('AppComponent', () => {
  it('should exist', () => {
    const component = new AppComponent(angularFirestoreStub as any);
  });
});

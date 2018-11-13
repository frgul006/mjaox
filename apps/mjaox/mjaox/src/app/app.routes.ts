import {
  BlogPageComponent,
  AboutPageComponent,
  BlogDetailsPageComponent
} from './pages';

export const routes = [
  { path: '', component: BlogPageComponent },
  { path: 'post/:id', component: BlogDetailsPageComponent },
  { path: 'about', component: AboutPageComponent }
];

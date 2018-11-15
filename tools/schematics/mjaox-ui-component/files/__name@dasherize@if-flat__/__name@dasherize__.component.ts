import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mjaox-ui-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>Component {
}

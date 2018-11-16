import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime
} from 'rxjs/operators';
import { MjaoxToolbarOptions } from './toolbar-options.model';

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'mjaox-ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toggle', [
      state('hidden', style({ opacity: 0, transform: 'translateY(-100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class ToolbarComponent implements AfterViewInit {
  @Input()
  options: MjaoxToolbarOptions = {
    links: []
  };

  private isVisible = true;

  @HostBinding('@toggle')
  get toggle(): string {
    return this.isVisible ? 'visible' : 'hidden';
  }
  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    scrollUp$.subscribe(() => (this.isVisible = true));
    scrollDown.subscribe(() => (this.isVisible = false));
  }
}

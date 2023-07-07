import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() searchTriggeredEmitter = new EventEmitter<string>();
  @ViewChild('searchInput') input!: ElementRef<HTMLInputElement>;

  searchBlogs(event: KeyboardEvent) {
    if (event.code === 'Enter')
      this.searchTriggeredEmitter.emit(this.input.nativeElement.value);
  }
}

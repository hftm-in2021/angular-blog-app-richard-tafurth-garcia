import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { UserData } from '@core/auth/authentication.state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() isAuthenticated!: boolean | null;
  @Input() userData!: UserData | null;
  @Output() searchTriggeredEmitter = new EventEmitter<string>();
  @Output() authenticateEmitter = new EventEmitter<boolean>();

  @ViewChild('searchInput') input!: ElementRef<HTMLInputElement>;
  @ViewChild('UserHeaderImage', { static: true })
  headerImage!: ElementRef<HTMLImageElement>;

  searchBlogs(event: KeyboardEvent) {
    if (event.code === 'Enter')
      this.searchTriggeredEmitter.emit(this.input.nativeElement.value);
  }

  login(): void {
    this.authenticateEmitter.emit(true);
  }

  logoff(): void {
    this.authenticateEmitter.emit(false);
  }
}

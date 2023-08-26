import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserData } from '@core/auth/authentication.state.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isAuthenticated!: boolean | null;
  @Input() userData!: UserData | null;
  @Output() searchTriggeredEmitter = new EventEmitter<string>();
  @Output() authenticateEmitter = new EventEmitter<boolean>();

  @ViewChild('searchInput') input!: ElementRef<HTMLInputElement>;
  @ViewChild('UserHeaderImage', { static: true })
  headerImage!: ElementRef<HTMLImageElement>;
  @ViewChild('drawer') sidenav!: MatSidenav;

  private breakpointObserver = inject(BreakpointObserver);

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

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}

import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { Observable } from 'rxjs/internal/Observable';

interface SpinnerState {
  isLoading: boolean;
}

const initialState: SpinnerState = {
  isLoading: true,
};

@Injectable({
  providedIn: 'root',
})
export class SpinnerStateService extends StateService<SpinnerState> {
  isLoading$: Observable<boolean> = this.select((state) => state.isLoading);

  constructor() {
    super(initialState);
  }

  public show(): void {
    this.setState({ isLoading: true });
  }

  public hide(): void {
    this.setState({ isLoading: false });
  }
}

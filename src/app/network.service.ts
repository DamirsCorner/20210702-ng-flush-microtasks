import { Injectable } from '@angular/core';
import { ToastsService } from './toasts.service';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(private toastsService: ToastsService) {}

  public async refreshData(): Promise<void> {
    await Promise.resolve(); // fake network call
    this.toastsService.addToast('Data refreshed.');
  }
}

import { Injectable } from '@angular/core';
import { Toast } from './toasts.model';

@Injectable({
  providedIn: 'root',
})
export class ToastsService {
  private readonly timeoutMs = 5 * 1000;
  private readonly toasts: Toast[] = [];

  public getToasts(): Toast[] {
    return this.toasts;
  }

  public addToast(message: string): void {
    const toast: Toast = {
      message,
      timestamp: Date.now(),
    };
    this.toasts.push(toast);

    setTimeout(() => {
      const index = this.toasts.indexOf(toast);
      if (index >= 0) {
        this.toasts.splice(index, 1);
      }
    }, this.timeoutMs);
  }
}

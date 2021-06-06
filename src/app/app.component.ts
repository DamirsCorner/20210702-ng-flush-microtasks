import { Component, OnInit } from '@angular/core';
import { NetworkService } from './network.service';
import { Toast } from './toasts.model';
import { ToastsService } from './toasts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public toasts: Toast[] = [];

  constructor(
    private toastsService: ToastsService,
    private networkService: NetworkService
  ) {}

  public ngOnInit(): void {
    this.toasts = this.toastsService.getToasts();
  }

  public addToast(): void {
    this.toastsService.addToast('Local toast.');
  }

  public async refreshData(): Promise<void> {
    await this.networkService.refreshData();
  }
}

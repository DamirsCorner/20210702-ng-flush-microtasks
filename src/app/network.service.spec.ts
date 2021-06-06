import {
  fakeAsync,
  flush,
  flushMicrotasks,
  TestBed,
} from '@angular/core/testing';

import { NetworkService } from './network.service';
import { ToastsService } from './toasts.service';

describe('NetworkService', () => {
  let service: NetworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('refreshData', () => {
    it('should add a toast - synchronous test fails', () => {
      const toastsService = TestBed.inject(ToastsService);
      const toasts = toastsService.getToasts();

      service.refreshData();

      expect(toasts.length).toBe(1);
      expect(toasts[0].message).toBe('Data refreshed.');
    });

    it('should add a toast - fake asynchronous test with flush fails', fakeAsync(() => {
      const toastsService = TestBed.inject(ToastsService);
      const toasts = toastsService.getToasts();

      service.refreshData();

      flush();

      expect(toasts.length).toBe(1);
      expect(toasts[0].message).toBe('Data refreshed.');
    }));

    it('should add a toast', fakeAsync(() => {
      const toastsService = TestBed.inject(ToastsService);
      const toasts = toastsService.getToasts();

      service.refreshData();

      flushMicrotasks();

      expect(toasts.length).toBe(1);
      expect(toasts[0].message).toBe('Data refreshed.');

      flush();
    }));
  });
});

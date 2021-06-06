import { TestBed } from '@angular/core/testing';

import { ToastsService } from './toasts.service';

describe('ToastsService', () => {
  let service: ToastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addToast', () => {
    it('should add a toast', () => {
      const toasts = service.getToasts();

      service.addToast('Test message');

      expect(toasts.length).toBe(1);
      expect(toasts[0].message).toBe('Test message');
    });
  });
});

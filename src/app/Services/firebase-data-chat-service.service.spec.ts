import { TestBed } from '@angular/core/testing';

import { FirebaseDataChatServiceService } from './firebase-data-chat-service.service';

describe('FirebaseDataChatServiceService', () => {
  let service: FirebaseDataChatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseDataChatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

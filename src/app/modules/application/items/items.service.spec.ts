import { TestBed } from '@angular/core/testing';

import { ItemsService } from './items.service';
import { HttpClientModule } from '@angular/common/http';

describe('ItemsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: ItemsService = TestBed.get(ItemsService);
    expect(service).toBeTruthy();
  });
});

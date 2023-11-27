import {computed, makeObservable, observable} from 'mobx';

import BaseEntity from './base_entity';

class BookPage extends BaseEntity {
  id;
  createdAt;
  @observable englishPortrait;
  @observable englishLandscape;
  @observable hindiPortrait;
  @observable hindiLandscape;
  @observable hinglishPortrait;
  @observable hinglishLandscape;
  @observable bookId;
  @observable pageNo;

  constructor(value, store) {
    super(value, store);

    makeObservable(this);

    this.initialize(value);
  }

  @computed
  get objectEntities() {
    return {
      id: this.id,
      createdAt: this.createdAt,
      englishPortrait: this.englishPortrait,
      englishLandscape: this.englishLandscape,
      hindiPortrait: this.hindiPortrait,
      hindiLandscape: this.hindiLandscape,
      hinglishPortrait: this.hinglishPortrait,
      hinglishLandscape: this.hinglishLandscape,
      bookId: this.bookId,
      pageNo: this.pageNo,
    };
  }
}

export default BookPage;

import {makeObservable, observable} from 'mobx';

import BaseEntity from './base_entity';

class BookReview extends BaseEntity {
  id;
  @observable bookId;
  @observable createdAt;
  @observable description;
  @observable name;
  @observable rating;

  constructor(value, store) {
    super(value, store);

    makeObservable(this);

    this.initialize(value);
  }
}

export default BookReview;

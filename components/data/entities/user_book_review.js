import {makeObservable, observable} from 'mobx';

import BaseEntity from './base_entity';

class UserBookReview extends BaseEntity {
  id;
  @observable bookId;
  @observable rating;
  @observable description;
  @observable createdAt;
  @observable updatedAt;

  constructor(value, store) {
    super(value, store);

    makeObservable(this);

    this.initialize(value);
  }
}

export default UserBookReview;

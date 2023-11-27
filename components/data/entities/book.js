import {computed, makeObservable, observable} from 'mobx';
import {isEmpty} from 'lodash';

import BaseEntity from './base_entity';

class Book extends BaseEntity {
  id;
  createdAt;
  updatedAt;
  @observable title;
  @observable description;
  @observable category;
  @observable rating;
  @observable english;
  @observable hindi;
  @observable hinglish;
  @observable pagesId;
  @observable coverImage;
  @observable author;
  @observable totalRatings;
  @observable totalReviews;
  @observable reviews;
  @observable bookUrl;
  @observable selectedReadingLanguage;
  @observable continueReadingBookId;

  @observable totalPageCompleted = 1;
  @observable totalPages;

  constructor(value, store) {
    super(value, store);

    makeObservable(this);

    this.initialize(value);
  }

  @computed
  get objectEntities() {
    return {
      continueReadingBookId: this.continueReadingBookId,
      id: this.id,
      title: this.title,
      createdAt: this.createdAt,
      description: this.description,
      rating: this.rating,
      category: this.category,
      english: this.english,
      hindi: this.hindi,
      hinglish: this.hinglish,
      pagesId: !isEmpty(this.pagesId)
        ? this.pagesId.map(page => page.objectEntities)
        : [],
      coverImage: this.coverImage,
      author: this.author,
      totalRatings: this.totalRatings,
      totalReviews: this.totalReviews,
      reviews: this.reviews,
      totalPageCompleted: this.totalPageCompleted,
      totalPages: this.totalPages,
      selectedReadingLanguage: this.selectedReadingLanguage,
    };
  }
}

export default Book;

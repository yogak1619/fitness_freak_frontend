import {makeAutoObservable} from 'mobx';

import AppStore from './stores/app_store';
import BookStore from './stores/book_store';
import UserStore from './stores/user_store';

export default class RootStore {
  constructor() {
    this.appStore = new AppStore(this);
    this.userStore = new UserStore(this);
    this.bookStore = new BookStore(this);

    makeAutoObservable(this);
  }
}

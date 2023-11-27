import {makeObservable} from 'mobx';
import BaseStore from './base_store';

class AppStore extends BaseStore {
  constructor(store) {
    super(store, null);

    makeObservable(this);
  }
}

export default AppStore;

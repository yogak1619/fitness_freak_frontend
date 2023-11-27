import {computed, makeObservable, observable} from 'mobx';

import BaseEntity from './base_entity';

class User extends BaseEntity {
  id;
  @observable email;
  @observable name;
  @observable phone;
  @observable password;
  @observable address;
  @observable landmark;
  @observable city;
  @observable country;
  @observable state;
  @observable pincode;
  @observable otp;
  @observable confirmPassword;

  constructor(value, store) {
    super(value, store);

    makeObservable(this);

    this.initialize(value);
  }

  @computed
  get asSelectOption() {
    return {label: this.fullName, value: this.id};
  }

  @computed
  get objectEntities() {
    return {
      email: this.email,
      name: this.name,
      phone: this.phone,
      password: this.password,
      address: this.address,
      landmark: this.landmark,
      city: this.city,
      country: this.country,
      state: this.state,
      pincode: this.pincode,
      otp: this.otp,
      confirmPassword: this.confirmPassword,
    };
  }
}

export default User;

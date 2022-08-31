import { action, observable } from 'mobx';

class ObservableStore {
  @observable darkTheme = false;

  @action setProperty(newProperty: boolean) {
    this.darkTheme = newProperty;
  }
}

const observableStore = new ObservableStore();
export default observableStore;
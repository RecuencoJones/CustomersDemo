import { Component } from '../Decorators/Component'

@Component({
  template: require('./navbar.html'),
  controllerAs: 'navbarCtrl'
})
export class Navbar implements ng.IComponentController {
  public constructor() {}
}

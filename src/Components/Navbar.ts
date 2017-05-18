import { Component } from '../Decorators/Component'

@Component({
  template: require('./navbar.html')
})
export class Navbar implements ng.IComponentController {}

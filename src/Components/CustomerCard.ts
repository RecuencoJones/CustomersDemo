import { Component } from '../Decorators/Component'
import { ICustomer } from '../Models/ICustomer'

@Component({
  bindings: {
    customer: '<',
    onClick: '&',
    onRemove: '&'
  },
  controllerAs: 'vm',
  template: require('./customer-card.html')
})
export class CustomerCard {
  public customer: ICustomer
  public onClick: Function
  public onRemove: Function

  public constructor() {}
}

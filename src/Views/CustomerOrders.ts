import * as _ from 'lodash'
import { View } from '../Decorators/View'
import { Inject } from '../Decorators/Inject'
import { API } from '../Services/API'
import { ICustomer } from '../Models/ICustomer'
import { IOrder } from '../Models/IOrder'

@View({
  url: '/customerorders/:id',
  template: require('./customer-orders.html'),
  controllerAs: 'vm'
})
@Inject('$stateParams', 'API')
export class CustomerOrdersView {
  private customer: ICustomer
  private ordersTotal: number

  public constructor(
    private $stateParams: ng.ui.IStateParamsService,
    private API: API
  ) {}

  public $onInit(): void {
    this.API.getCustomerWithId(+this.$stateParams.id)
    .then((data: ICustomer) => {
      this.customer = data
      this.ordersTotal = _.chain(this.customer.orders)
      .map(({orderTotal}: IOrder) => orderTotal)
      .reduce((accum: number, value: number) => accum + value, 0)
      .value()
    })
  }
}

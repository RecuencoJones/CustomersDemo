import { View } from '../Decorators/View'
import { API } from '../Services/API'
import { Inject } from '../Decorators/Inject'
import { ICustomer } from '../Models/ICustomer'

@View({
  url: '/',
  template: require('./customers.html'),
  controllerAs: 'vm'
})
@Inject('$state', 'API')
export class CustomersView {
  private newCustomer: ICustomer
  private customers: Array<ICustomer>

  constructor(
    private $state: ng.ui.IStateService,
    private API: API
  ) {}

  public handleSubmit() {
    console.log(this.newCustomer)
  }

  public onNavigate(id: number) {
    this.$state.go('customer-orders', {
      id
    })
  }

  public onRemove(id: number) {
    console.log('remove', id)
  }

  public $onInit() {
    this.API.getCustomers()
    .then((data) => {
      this.customers = data
    })
  }
}

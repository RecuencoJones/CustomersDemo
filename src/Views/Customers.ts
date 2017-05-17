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
  private newCustomer: ICustomer = {} as ICustomer
  private customers: Array<ICustomer>

  constructor(
    private $state: ng.ui.IStateService,
    private API: API
  ) {}

  /**
   * Handle new customer creation.
   */
  public handleSubmit(form: ng.IFormController): void {
    if (form.$valid) {
      this.API.addCustomer(this.newCustomer)
      .then(() => this.populateCustomers())
      .then(() => {
        this.newCustomer = {} as ICustomer
        form.$setPristine()
        form.$setUntouched()
      })
    } else {
      form.$error.required.map((error) => {
        error.$setTouched()
      })
    }
  }

  /**
   * Handle click on customer orders, navigate to customer orders view.
   *
   * @param id - unique id of customer from which to retrieve orders.
   */
  public onNavigate(id: number): void {
    this.$state.go('customer-orders', {
      id
    })
  }

  /**
   * Handle removal of customer.
   *
   * @param id - unique id of customer to remove.
   */
  public onRemove(id: number): void {
    console.log('remove', id)

    this.API.removeCustomerWithId(id)
    .then(() => this.populateCustomers())
  }

  /**
   * Angular init lifecycle hook.
   */
  public $onInit(): void {
    this.populateCustomers()
  }

  private populateCustomers() {
    this.API.getCustomers()
    .then((data) => {
      this.customers = data
    })
  }
}

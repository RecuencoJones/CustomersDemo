import { Inject } from '../Decorators/Inject'
import { ICustomer } from '../Models/ICustomer'

type GetCustomersResponse = ng.IHttpPromiseCallbackArg<Array<ICustomer>>
type GetCustomerResponse = ng.IHttpPromiseCallbackArg<ICustomer>
type CreateCustomerResponse = ng.IHttpPromiseCallbackArg<number>
type DeleteCustomerResponse = ng.IHttpPromiseCallbackArg<{}>

@Inject('$http', '$location','$log')
export class API {
  private port = 3000
  private apiUrl: string

  public constructor(
    private $http: ng.IHttpService,
    private $location: ng.ILocationService,
    private $log: ng.ILogService
  ) {
    this.apiUrl = `http://${this.$location.host()}:${this.port}`
  }

  /**
   * Retrieve all customers.
   *
   * @return promise handler.
   */
  public getCustomers(): ng.IPromise<Array<ICustomer>> {
    return this.$http.get(`${this.apiUrl}/customers`)
    .then(({data}: GetCustomersResponse) => data)
    .catch(() => {
      this.$log.error('Error retrieving customers data')
    })
  }

  /**
   * Add a new customer.
   *
   * @param customer - customer data to add.
   * @returns promise handler.
   */
  public addCustomer(customer: ICustomer): ng.IPromise<number> {
    return this.$http.post(`${this.apiUrl}/customers`, customer)
    .then(({data}: CreateCustomerResponse) => data)
    .catch(() => {
      this.$log.error('Error creating new customer', customer)
    })
  }

  /**
   * Retrieve a customer with given id.
   *
   * @param id - customer unique id.
   * @return promise handler.
   */
  public getCustomerWithId(id: number): ng.IPromise<ICustomer> {
    return this.$http.get(`${this.apiUrl}/customers/${id}`)
    .then(({data}: GetCustomerResponse) => data)
    .catch(() => {
      throw new Error(`Customer with id ${id} does not exist.`)
    })
  }

  /**
   * Remove a customer with given id.
   *
   * @param id - customer unique id.
   * @returns promise handler.
   */
  public removeCustomerWithId(id: number): ng.IPromise<{}> {
    return this.$http.delete(`${this.apiUrl}/customers/${id}`)
    .then(({data}: DeleteCustomerResponse) => data)
    .catch(() => {
      this.$log.error('Error removing customer with id', id)
    })
  }
}

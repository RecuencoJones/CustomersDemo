import * as _ from 'lodash'
import { Inject } from '../Decorators/Inject'
import { ICustomer } from '../Models/ICustomer'

type CustomersResponse = ng.IHttpPromiseCallbackArg<Array<ICustomer>>
type CustomerResponse = ng.IHttpPromiseCallbackArg<ICustomer>

@Inject('$http', '$location','$log')
export class API {
  public constructor(
    private $http: ng.IHttpService,
    private $location: ng.ILocationService,
    private $log: ng.ILogService
  ) {}

  private port = 3000
  private apiUrl = `http://${this.$location.host()}:${this.port}`

  /**
   * Retrieve all customers.
   *
   * @return promise handler.
   */
  public getCustomers(): ng.IPromise<Array<ICustomer>> {
    return this.$http.get(`${this.apiUrl}/customers`)
    .then(({data}: CustomersResponse) => data)
    .catch(() => {
      this.$log.error('Error getting customers data')
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
    .then(({data}: CustomerResponse) => data)
    .catch(() => {
      this.$log.error('Error getting customers data')
    })
  }
}

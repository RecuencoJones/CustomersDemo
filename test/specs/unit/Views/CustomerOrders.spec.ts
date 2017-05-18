import * as angular from 'angular'
import { expect } from 'chai'
import { CustomerOrdersView } from '../../../../src/Views/CustomerOrders'
import { ICustomer } from '../../../../src/Models/ICustomer'

describe('View: CustomerOrder', () => {
  const customerMock: ICustomer = {
    id: 0,
    firstName: 'Foo',
    lastName: 'Bar',
    address: 'Angular 1337',
    city: 'FrontendLand',
    orders: [
      {
        product: 'Something 1',
        price: 1,
        quantity: 10,
        orderTotal: 10
      }, {
        product: 'Something 2',
        price: 1,
        quantity: 10,
        orderTotal: 10
      }, {
        product: 'Something 3',
        price: 2,
        quantity: 10,
        orderTotal: 20
      }
    ]
  }

  let $rootScope, $controller, $q, $state, $stateParams, API

  beforeEach(angular.mock.module('customers-demo'))

  beforeEach(() => {
    $stateParams = {}

    API = {
      getCustomerWithId(id) {
        return id < 5 ? $q.resolve(customerMock) : $q.reject('error')
      }
    }

    angular.mock.module(($provide) => {
      $provide.service('$stateParams', () => $stateParams)
      $provide.service('API', () => API)
    })
  })

  beforeEach(inject((_$rootScope_, _$controller_, _$state_, _$q_) => {
    $rootScope = _$rootScope_
    $controller = _$controller_
    $q = _$q_
    $state = _$state_
  }))

  it('should render the view controller with existing customer', () => {
    let $ctrl: CustomerOrdersView

    $stateParams.id = 1

    $ctrl = $controller($state.get('customer-orders').controller)

    $ctrl.$onInit()
    $rootScope.$apply()

    expect($ctrl.customer).to.be.an('object')
  })

  it('should calculate the total amount of customer orders', () => {
    let $ctrl: CustomerOrdersView

    $stateParams.id = 1

    $ctrl = $controller($state.get('customer-orders').controller)

    $ctrl.$onInit()
    $rootScope.$apply()

    expect($ctrl.ordersTotal).to.equal(40)
  })

  it('should render error message if customer does not exist', () => {
    let $ctrl: CustomerOrdersView

    $stateParams.id = 6

    $ctrl = $controller($state.get('customer-orders').controller)

    $ctrl.$onInit()
    $rootScope.$apply()

    expect($ctrl.error).to.be.a('string')
  })
})

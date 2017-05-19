import * as angular from 'angular'
import { CustomerOrdersView } from '../../../../src/Views/CustomerOrders'
import { ICustomer } from '../../../../src/Models/ICustomer'

describe('View: CustomerOrder', () => {
  let $rootScope: ng.IRootScopeService
  let $controller: ng.IControllerService
  let $q: ng.IQService
  let $state: ng.ui.IStateService
  let $stateParams: ng.ui.IStateParamsService
  let customerMock: ICustomer
  let API

  function getController(): CustomerOrdersView {
    return $controller($state.get('customer-orders').controller as Function) as CustomerOrdersView
  }

  beforeEach(angular.mock.module('customers-demo'))

  beforeEach(() => {
    customerMock = {
      id: 0,
      orders: [
        {
          orderTotal: 10
        }, {
          orderTotal: 10
        }, {
          orderTotal: 20
        }
      ]
    } as ICustomer

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
    let $ctrl: CustomerOrdersView = getController()

    $stateParams.id = 1

    $ctrl.$onInit()
    $rootScope.$apply()

    expect($ctrl.customer).to.be.an('object')
    expect($ctrl.ordersTotal).to.equal(40)
  })

  it('should render error message if customer does not exist', () => {
    let $ctrl: CustomerOrdersView = getController()

    $stateParams.id = 6

    $ctrl.$onInit()
    $rootScope.$apply()

    expect($ctrl.error).to.be.a('string')
  })
})

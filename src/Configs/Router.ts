import { CustomersView } from '../Views/Customers'
import { CustomerOrdersView } from '../Views/CustomerOrders'

export function routerConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('customers', CustomersView)
  .state('customer-orders', CustomerOrdersView)

  $urlRouterProvider.otherwise('/')
}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']

import * as angular from 'angular'
import { expect } from 'chai'

describe('Component: CustomerCard', () => {
  const customerMock = {
    firstName: 'Foo',
    lastName: 'Bar',
    orders: [
      {
        priceTotal: 30
      }, {
        priceTotal: 60
      }
    ]
  }

  let $componentController

  beforeEach(angular.mock.module('customers-demo'))
  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_
  }))

  it('should render props', () => {
    const $ctrl = $componentController('customerCard', null, {
      customer: customerMock,
      onClick: () => {},
      onRemove: () => {}
    })

    expect($ctrl.customer).to.equal(customerMock)
  })
})

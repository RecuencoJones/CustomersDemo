import * as angular from 'angular'

describe('Component: Navbar', () => {
  let $componentController

  beforeEach(angular.mock.module('customers-demo'))

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_
  }))

  it('should render the component', () => {
    const $ctrl = $componentController('navbar')

    expect($ctrl).to.not.be.undefined
  })
})

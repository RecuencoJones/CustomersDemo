import * as angular from 'angular'
import { FormInput } from '../../../../src/Components/FormInput'

describe('Component: FormInput', () => {
  let $componentController: ng.IControllerService

  beforeEach(angular.mock.module('customers-demo'))

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_
  }))

  it('should render the component', () => {
    const $ctrl: FormInput = $componentController('formInput', null, {
      name: 'someInput',
      placeholder: 'Some Input',
      label: 'Some Input Label',
      model: 'value',
      form: {} as ng.IFormController
    }) as FormInput

    expect($ctrl.name).to.equal('someInput')
    expect($ctrl.placeholder).to.equal('Some Input')
    expect($ctrl.label).to.equal('Some Input Label')
    expect($ctrl.model).to.equal('value')
  })
})

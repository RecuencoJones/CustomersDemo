import { Component } from '../Decorators/Component'

@Component({
  bindings: {
    name: '@',
    placeholder: '@',
    label: '@',
    model: '=',
    form: '='
  },
  controllerAs: 'vm',
  template: require('./form-input.html')
})
export class FormInput implements ng.IComponentController {
  public name: string
  public placeholder: string
  public label: string
  public model: string
  public form: ng.IFormController
}

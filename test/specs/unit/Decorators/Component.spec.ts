import { Component } from '../../../../src/Decorators/Component'

describe('Decorator: Component', () => {
  it('should assign component configuration to a class', () => {
    class ComponentClass {}

    const decorated: ng.IComponentOptions = Component({
      template: '<div></div>'
    })(ComponentClass)

    expect(decorated.template).to.equal('<div></div>')
    expect(decorated.controller).to.equal(ComponentClass)
  })
})

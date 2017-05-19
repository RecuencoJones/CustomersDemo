import { View } from '../../../../src/Decorators/View'

describe('Decorator: View', () => {
  it('should assign view configuration to a class', () => {
    class ViewClass {}

    const decorated: ng.ui.IState = View({
      url: '/',
      template: '<div></div>'
    })(ViewClass)

    expect(decorated.url).to.equal('/')
    expect(decorated.template).to.equal('<div></div>')
    expect(decorated.controller).to.equal(ViewClass)
  })
})

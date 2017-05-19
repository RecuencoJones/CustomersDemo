import { Inject } from '../../../../src/Decorators/Inject'

describe('Decorator: Inject', () => {
  it('should assign dependencies to $inject static class property', () => {
    class SomeClass {}

    Inject('$http')(SomeClass)

    expect(SomeClass.$inject).to.deep.equal(['$http'])
  })

  it('should assign empty dependencies to $inject static class property', () => {
    class SomeClass {}

    Inject()(SomeClass)

    expect(SomeClass.$inject).to.be.empty
  })
})

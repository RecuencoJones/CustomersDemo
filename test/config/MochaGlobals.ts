import '../../src/Vendor'
import '../../src/App'
import 'angular-mocks'
import * as sinonChai from 'sinon-chai'

declare global {
  const expect: Chai.ExpectStatic;
}

chai.use(sinonChai)

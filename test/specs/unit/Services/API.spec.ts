import * as angular from 'angular'
import { ICustomer } from '../../../../src/Models/ICustomer'
import {
  API, GetCustomersResponse, CreateCustomerResponse, GetCustomerResponse,
  DeleteCustomerResponse
} from '../../../../src/Services/API'

describe('Service: API', () => {
  let $httpBackend: ng.IHttpBackendService
  let api: API

  beforeEach(angular.mock.module('customers-demo'))

  beforeEach(inject((_$httpBackend_, _API_) => {
    $httpBackend = _$httpBackend_
    api = _API_
  }))

  describe('getCustomers()', () => {
    it('should retrieve all customers successfully', () => {
      const customerMocks = [{}, {}] as Array<ICustomer>

      let response: Array<ICustomer>

      api.getCustomers()
      .then(({data}: GetCustomersResponse) => {
        response = data
      })

      $httpBackend.whenGET(/\/customers$/).respond(200, {
        data: customerMocks
      })

      $httpBackend.flush()

      expect(response).to.have.length(2)
    })
  })

  describe('addCustomer()', () => {
    it('should save a new customer successfully', () => {
      const customerMock = {} as ICustomer

      let response: number

      api.addCustomer(customerMock)
      .then(({data}: CreateCustomerResponse) => {
        response = data
      })

      $httpBackend.whenPOST(/\/customers$/).respond(201, {
        data: 1
      })

      $httpBackend.flush()

      expect(response).to.equal(1)
    })
  })

  describe('getCustomerWithId()', () => {
    it('should retrieve all customers successfully', () => {
      const customerMock = {} as ICustomer

      let response: ICustomer

      api.getCustomerWithId(1)
      .then(({data}: GetCustomerResponse) => {
        response = data
      })

      $httpBackend.whenGET(/\/customers\/[0-9]+$/).respond(200, {
        data: customerMock
      })

      $httpBackend.flush()

      expect(response).to.deep.equal(customerMock)
    })
  })

  describe('removeCustomerWithId()', () => {
    it('should retrieve all customers successfully', () => {
      let response: Object

      api.removeCustomerWithId(1)
      .then(({data}: DeleteCustomerResponse) => {
        response = data
      })

      $httpBackend.whenDELETE(/\/customers\/[0-9]+$/).respond(200, {
        data: {}
      })

      $httpBackend.flush()

      expect(response).to.be.empty
    })
  })
})

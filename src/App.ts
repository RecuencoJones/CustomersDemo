import * as angular from 'angular'
import { routerConfig } from './Configs/Router'
import { Navbar } from './Components/Navbar'
import { CustomerCard } from './Components/CustomerCard'
import { FormInput } from './Components/FormInput'
import { API } from './Services/API'
import './Styles/styles.scss'

angular.module('customers-demo', ['ui.router'])
.service('API', API)
.component('customerCard', CustomerCard)
.component('navbar', Navbar)
.component('formInput', FormInput)
.config(routerConfig)

angular.bootstrap(document, ['customers-demo'])

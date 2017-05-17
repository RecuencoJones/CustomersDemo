import * as angular from 'angular'
import { routerConfig } from './Configs/Router'
import { Navbar } from './Components/Navbar'
import { CustomerCard } from './Components/CustomerCard'
import './Styles/styles.scss'
import { API } from './Services/API'

angular.module('customers-demo', ['ui.router'])
.service('API', API)
.component('customerCard', CustomerCard)
.component('navbar', Navbar)
.config(routerConfig)

angular.bootstrap(document, ['customers-demo'])

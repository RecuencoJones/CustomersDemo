import * as angular from 'angular'

export function View(options: ng.ui.IState) {
  return (controller: Function) => angular.extend(options, {controller})
}

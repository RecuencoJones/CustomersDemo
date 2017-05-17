import * as angular from 'angular'

/**
 * Component Decorator.
 * Binds angular component configuration to a class.
 *
 * @param options - component configuration.
 * @return {(controller:Function)=>any}
 */
export function Component(options: ng.IComponentOptions) {
  return (controller: Function) => angular.extend(options, {controller})
}

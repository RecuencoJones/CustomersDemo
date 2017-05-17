/**
 * Inject Decorator.
 * Handles dependency injection of angular providers through static $inject property.
 *
 * @param providers
 * @return {(fn:Function)=>undefined}
 * @constructor
 */
export function Inject(...providers) {
  return (fn: Function) => {
    fn.$inject = providers
  }
}

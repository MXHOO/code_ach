function bind(fn, obj, args) {
  return function() {
    fn.call(obj, ...args)
  } 
}
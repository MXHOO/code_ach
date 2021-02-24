function apply(fn, obj ,args) {
  obj.temp = fn
  const result = obj.temp(...args)
  delete obj.temp
  return result
}
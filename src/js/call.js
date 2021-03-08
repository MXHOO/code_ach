// fn: 要改变this指向的对象
// obj: 将要绑定的对象
// args: 参数
function call(fn, obj, ...args) {
  if(obj === undefined || obj === null) {
    obj = globalThis
  }
  obj.temp = fn
  const result = obj.temp(...args)
  delete obj.temp
  return result
}
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass(el, className) {
  // 是否有class
  let reg = new RegExp('(^|\\s)' + className + ('\\s|$'))
  return reg.test(el.className) && !!el.className
}

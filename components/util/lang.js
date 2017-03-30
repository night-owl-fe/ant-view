export function each (list, cb) {
  for (let i = 0, len = list.length; i < len; i++) {
    if (cb(list[i], i)) {
      break
    }
  }
}

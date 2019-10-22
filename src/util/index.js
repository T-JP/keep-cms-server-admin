const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (val, key) => hasOwnProperty.call(val, key);
export const date = (time = new Date()) => {
  const date = time instanceof Date ? time : new Date(time),
    Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    stamp = date.getTime();
  return { Y, M, D, h, m, s, stamp };
};

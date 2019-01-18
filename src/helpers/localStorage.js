export const getValue = name => JSON.parse(localStorage.getItem(name));

export const setValue = (name, obj) =>
  localStorage.setItem(name, JSON.stringify(obj));

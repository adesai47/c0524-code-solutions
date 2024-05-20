/* exported toObject */
function toObject(keyValuePair: [string, any]): any {
  const obj: any = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}

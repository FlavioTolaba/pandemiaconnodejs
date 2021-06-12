export const base64ToStr = (base64: string) => {
  // create a buffer
  const buff = Buffer.from(base64, 'base64');

  // decode buffer as UTF-8
  const str = buff.toString('utf-8');

  return str;
};

export const strToBase64 = (str: string) => {
  // create a buffer
  const buff = Buffer.from(str, 'utf-8');

  // decode buffer as Base64
  const base64 = buff.toString('base64');

  return base64;
};

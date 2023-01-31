export function getCurrentDate() {
  return Date.now();
}

export const info = (msg) => {
  console.log(`Info: ${msg}`);
};

export const log = (msg) => {
  console.log(`Log: ${msg}`);
};

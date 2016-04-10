function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

export default (name, fn) => async () => {
  let start = new Date();
  console.log(`[${format(start)}] Starting '${name}'...`);
  await fn();
  let end = new Date();
  let time = end.getTime() - start.getTime();
  console.log(`[${format(end)}] Finished '${name}' after ${time} ms`);
};

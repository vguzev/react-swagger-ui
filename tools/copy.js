import task from './lib/task';
import copy from './lib/copy';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
export default task('copy', async () => {
  await Promise.all([
    copy('src/assets', 'dist')
  ]);
});

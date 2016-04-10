import del from 'del';
import task from './lib/task';
import fs from './lib/fs';

/**
 * Cleans up the build directory (/dist).
 */
export default task('clean', async () => {
  await del(['.tmp', 'dist/*', '!dist/.git'], {dot: true});
  await fs.makeDir('dist');
});

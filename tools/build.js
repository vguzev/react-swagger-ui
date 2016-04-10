import task from './lib/task';
import cleanTask from './clean';
import copyTask from './copy';
import bundleTask from './bundle';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
export default task('build', async () => {
  await cleanTask();
  await copyTask();
  await bundleTask();
});


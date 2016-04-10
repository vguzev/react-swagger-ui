import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import task from './lib/task';
import config from './config';
import buildtask from './build';

global.WATCH = true;
const bundler = webpack(config);

/**
 * Launches a development web server with "live reload" functionality -
 * synchronizing URLs, interactions and code changes across multiple devices.
 */
export default task('start', async () => {
  await buildtask();
  var server = new WebpackDevServer(bundler, config.devServer);
  server.listen(8081);
});

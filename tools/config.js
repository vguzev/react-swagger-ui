import configDebug from './config-debug';
import configProduction from './config-production';

const isDebug = !process.argv.includes('release');
function getConfig (isDebug) {
  if (isDebug) {
    console.log('..running development build');
    return configDebug;
  } else {
    console.log('..running production build');
    return configProduction;
  }
}

export default getConfig(isDebug);

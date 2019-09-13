import { join, sep } from 'path';
import controller from './controller';
import events from './events';

const filePath = join(__dirname);
const publicFilePath = join(filePath, 'public');

export default { controller, events, publicFilePath, filePath, name: 'theme' };
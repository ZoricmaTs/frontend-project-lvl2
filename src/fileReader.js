import path from 'path';
import fs from 'fs';

export default (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(absolutePath, 'utf-8');
};

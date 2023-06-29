import { copy } from 'fs-extra';

const sourcePath = 'src/assets';
const destinationPath = 'dist/assets';

copy(sourcePath, destinationPath, (err) => {
  if (err) {
    console.error('Error copying assets:', err);
  } else {
    console.log('Assets copied successfully!');
  }
});
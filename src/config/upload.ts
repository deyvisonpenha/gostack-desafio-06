import multer from 'multer';
import crypto from 'crypto';
import path, { extname } from 'path';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};

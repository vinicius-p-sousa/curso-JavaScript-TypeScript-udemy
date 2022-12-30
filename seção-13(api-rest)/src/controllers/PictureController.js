import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Picture from '../models/Picture';
import Aluno from '../models/Aluno';

const upload = multer(multerConfig).single('picture');

class PictureController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      const { alunoId } = req.body;
      if (!alunoId) {
        return res.status(400).json({
          errors: ['id do aluno ausente'],
        });
      }
      const alunoExiste = await Aluno.findByPk(alunoId);
      if (!alunoExiste) {
        return res.status(400).json({
          errors: ['aluno inexistente'],
        });
      }
      const { originalname, filename } = req.file;
      const picture = await Picture.create({
        original_name: originalname,
        file_name: filename,
        alunoId,
      });
      return res.json(picture);
    });
  }
}

export default new PictureController();

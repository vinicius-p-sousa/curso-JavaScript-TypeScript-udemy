"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

var _Picture = require('../models/Picture'); var _Picture2 = _interopRequireDefault(_Picture);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('picture');

class PictureController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      const { aluno_id } = req.body;
      if (!aluno_id) {
        return res.status(400).json({
          errors: ['id do aluno ausente'],
        });
      }
      const alunoExiste = await _Aluno2.default.findByPk(aluno_id);
      if (!alunoExiste) {
        return res.status(400).json({
          errors: ['aluno inexistente'],
        });
      }
      const { originalname, filename } = req.file;
      const picture = await _Picture2.default.create({
        original_name: originalname,
        file_name: filename,
        aluno_id,
      });
      return res.json(picture);
    });
  }
}

exports. default = new PictureController();

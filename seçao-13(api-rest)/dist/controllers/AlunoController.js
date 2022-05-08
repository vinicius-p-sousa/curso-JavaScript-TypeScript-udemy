"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Picture = require('../models/Picture'); var _Picture2 = _interopRequireDefault(_Picture);

class AlunoController {
  async index(req, res) {
    const alunos = await _Aluno2.default.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'peso', 'altura'],
      order: [['id', 'DESC'], [_Picture2.default, 'id', 'DESC']],
      include: {
        model: _Picture2.default,
        attributes: ['original_name', 'file_name', 'url'],
      },
    });
    res.json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['missing id'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Picture2.default, 'id', 'DESC']],
        include: {
          model: _Picture2.default,
          attributes: ['original_name', 'file_name', 'url'],
        },
      });
      if (!aluno) {
        return res.status(400).json({
          errors: ['aluno não existe'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const {
        id, nome, sobrenome, email, idade, peso, altura,
      } = await _Aluno2.default.create(req.body);
      return res.json({
        id, nome, sobrenome, email, idade, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['missing id'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['aluno não existe'],
        });
      }

      const {
        nome, sobrenome, email, idade, peso, altura,
      } = await aluno.update(req.body);
      return res.json({
        id, nome, sobrenome, email, idade, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['missing id'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['aluno não existe'],
        });
      }
      await aluno.destroy();
      return res.json({ apagado: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new AlunoController();

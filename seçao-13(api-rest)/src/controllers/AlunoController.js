import Aluno from '../models/Aluno';
import Picture from '../models/Picture';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'peso', 'altura'],
      order: [
        ['id', 'DESC'],
        [Picture, 'id', 'DESC'],
      ],
      include: {
        model: Picture,
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

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'peso', 'altura'],
        order: [
          ['id', 'DESC'],
          [Picture, 'id', 'DESC'],
        ],
        include: {
          model: Picture,
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
      const { id, nome, sobrenome, email, idade, peso, altura } =
        await Aluno.create(req.body);
      return res.json({
        id,
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
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

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['aluno não existe'],
        });
      }

      const { nome, sobrenome, email, idade, peso, altura } =
        await aluno.update(req.body);
      return res.json({
        id,
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
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

      const aluno = await Aluno.findByPk(id);
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

export default new AlunoController();

import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'vincius',
      sobrenome: 'pereira',
      email: 'email@.com',
      idade: 17,
      peso: 180,
      altura: 1.76,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

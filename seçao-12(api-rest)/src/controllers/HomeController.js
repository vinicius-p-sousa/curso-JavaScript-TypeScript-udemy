import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'vinicius',
      sobrenome: 'pereira',
      email: 'email@email',
      idade: 17,
      peso: 1000.5,
      altura: 1.75,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();

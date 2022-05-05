class HomeController {
  async index(req, res) {
    res.json('oi, tudo bem!');
  }
}

export default new HomeController();

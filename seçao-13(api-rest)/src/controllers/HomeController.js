class HomeController {
  index(req, res) {
    res.json({
      tudo: 'certin',
    });
  }
}

export default new HomeController();

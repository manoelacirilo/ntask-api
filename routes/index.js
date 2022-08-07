module.exports = (app) => {
  /**
   * @api {get} / API Status
   * @apiGroup Status
   * @apiSuccess {String} status Menssagen de status da API
   * @apiSuccessExample {json} Sucesso
   *    HTTP/1.1 200 OK
   *    {"status": "NTask APi"}
   */
  app.get("/", (req, res) => {
    res.json({ status: "NTask API" });
  });
};



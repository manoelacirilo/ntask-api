module.exports = (app) => {
  async function start(port) {
    try {
      await app.db.authenticate();
      await app.db.sync();
      if (process.env.NODE_ENV !== 'test') {
        app.listen(port, () => {
          console.log(`Ntask API - port ${port}`);
        });
      }
    } catch (err) {
      console.log("Connection with database failed.");
      console.error(err);
    }
  }
  start(app.get("port"));
};

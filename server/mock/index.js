import DATA_CONTACT_LIST from './data/contacts';

module.exports = (app, enableMock) => {
  if (enableMock) {
    app.get('/api/mock/contacts', (req, res) => {
      setTimeout(() => {
        res.json(DATA_CONTACT_LIST);
      }, 500);
    });
  }
};

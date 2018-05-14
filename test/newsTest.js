const News = require('../api/Controller/newsController');


describe('newsController', function() {
  describe('list', () => {
    it('should return all of news', async () => {
     // mock News Model
      const news = {
        id: 1,
        title: 'berita hari ini',
        content: 'hari ini cerah sekali alhamdulillah',
        author: 'fany',
        Created_date:  Date.now,
        status: 'draft',
      };
      const dataFake = {
        findOne: jest.fn(() => news),
         populate: () => news,
      };

      const controller = new News({
        News: dataFake,
      });

      const res = {};
      const next = jest.fn();

      const jsonSpy = jest.fn(() => 'xxx');
      const statusSpy = jest.fn(() => ({ json: jsonSpy }));

      res.status = statusSpy;

      expect(statusSpy).toBeCalledWith(200);
      expect(jsonSpy).toBeCalledWith({
        id: 1,
        title: 'berita hari ini',
        content: 'hari ini cerah sekali alhamdulillah',
        author: 'fany',
        Created_date:  Date.now,
        status: 'draft',
        topic: [],
      });

    });
  });
});
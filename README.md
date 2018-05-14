## Rest API
API for News and Topic

### Tech

this task uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [MongoDB] - NoSQL database program

### Installation

install and run

```sh
$ git clone  git@github.com:azkiya/rest-api-news.git
$ cd rest-api-news
$ npm install
$ npm run start
```

make sure mongodb started

### End Point

list of end point

| task | method|end point |
| ------ | ------ | ------ |
| list topics  | GET | [http://localhost:3000/topics] |
| create topic | POST | [http://localhost:3000/topics] |
| single topic | GET | [http://localhost:3000/topics/:topicId] |
| update topic | PUT | [http://localhost:3000/topics/:topicId] |
| remove topic | DELETE | [http://localhost:3000/topics/:topicId] |
| list news  | GET | [http://localhost:3000/news] |
| find news by topics  | GET | [http://localhost:3000/news/topic/:topicId] |
| find news by status  | GET | [http://localhost:3000/news/status/:statusNews] |
| create news | POST | [http://localhost:3000/news] |
| single news | GET | [http://localhost:3000/news/:newsId] |
| update news | PUT | [http://localhost:3000/news/:newsId] |
| remove news | DELETE | [http://localhost:3000/news/:newsId] |
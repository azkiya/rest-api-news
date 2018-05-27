## Rest API
API for News and Topic

### Tech

this task uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [MongoDB] - NoSQL database program
* [mLab]	- mLab is the leading Database-as-a-Service for MongoDB

use mLab so no need to install mongoDB, so that it automatically connect with my database

### Installation

install and run

```sh
$ git clone  git@github.com:azkiya/rest-api-news.git
$ cd rest-api-news
$ npm install
$ npm run start
```

### End Point
* deploy at now.sh 
list of end point

| task | method|end point |
| ------ | ------ | ------ |
| list topics  | GET | [https://rest-api-dqlwalnead.now.sh/topics] |
| create topic | POST | [https://rest-api-dqlwalnead.now.sh/topics] |
| single topic | GET | [https://rest-api-dqlwalnead.now.sh/topics/:topicId] |
| update topic | PUT | [https://rest-api-dqlwalnead.now.sh/topics/:topicId] |
| remove topic | DELETE | [https://rest-api-dqlwalnead.now.sh/topics/:topicId] |
| list news  | GET | [https://rest-api-dqlwalnead.now.sh/news] |
| find news by topics  | GET | [https://rest-api-dqlwalnead.now.sh/news/topic/:topicId] |
| find news by status  | GET | [https://rest-api-dqlwalnead.now.sh/news/status/:statusNews] |
| create news | POST | [https://rest-api-dqlwalnead.now.sh/news] |
| single news | GET | [https://rest-api-dqlwalnead.now.sh/news/:newsId] |
| update news | PUT | [https://rest-api-dqlwalnead.now.sh/news/:newsId] |
| remove news | DELETE | [https://rest-api-dqlwalnead.now.sh/news/:newsId] |
| create user | POST | [https://rest-api-dqlwalnead.now.sh/register] |
| login user | POST | [https://rest-api-dqlwalnead.now.sh/login] |
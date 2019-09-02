# LAB - 15

 ## API Server

 ### Author: Evan Brecht-Curry

 ### Links and Resources
* [submission PR](https://github.com/evan-401-advanced-javascript/lab-15-build-an-api-server/pull/1)
* [travis](https://www.travis-ci.com/evan-401-advanced-javascript/lab-15-build-an-api-server)
* [deployment](https://lab-13-tokens.herokuapp.com/) 
* [docs](http://localhost:3000/docs/)


 ##### Exported Values and Methods

 ###### 
`post(signup) -> {object} 200 - request token`
`post(signin) -> {object} 200 - request token`
`get(posts) -> {object} 200 - request token`
#### routes to modify categories
`router.get('/api/v1/categories', auth, getCategories);`
`router.post('/api/v1/categories', auth, postCategories);`
`router.get('/api/v1/categories/:id', auth, getCategory);`
`router.put('/api/v1/categories/:id', auth, putCategories);`
`router.delete('/api/v1/categories/:id', auth, deleteCategories);`

### Setup
#### `.env` requirements
* `MONGODB_URI` - mongodb://localhost:27017/lab-15
* `PORT` - 3000
* `SECRET` - secret


 #### UML
![UML](uml.jpg)
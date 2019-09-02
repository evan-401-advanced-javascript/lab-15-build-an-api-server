'use strict';
const express = require('express');
const router = express.Router();
const auth = require('./middleware/auth');

// ROUTES

router.get('/api/v1/categories', auth, getCategories);
router.post('/api/v1/categories', auth, postCategories);
router.get('/api/v1/categories/:id', auth, getCategory);
router.put('/api/v1/categories/:id', auth, putCategories);
router.delete('/api/v1/categories/:id', auth, deleteCategories);
// Models
const Categories = require('./model/categories/categories-model');
const categories = new Categories();
function getCategories(request,response,next) {
  // expects an array of object to be returned from the model
  categories.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

/**
 * expects an array with the one matching record from the model
 * @param request
 * @param response
 * @param next
 */
function getCategory(request,response,next) {
  categories.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

/**
 * expects the record that was just added to the database
 * @param request
 * @param response
 * @param next
 */
function postCategories(request,response,next) {
  categories.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}
/**
 * expects the record that was just updated in the database
 * @param request
 * @param response
 * @param next
 */
function putCategories(request,response,next) {
  categories.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}
/**
 * Expects no return value (resource was deleted)
 * @param request
 * @param response
 * @param next
 */
function deleteCategories(request,response,next) {
  categories.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}
module.exports = router;
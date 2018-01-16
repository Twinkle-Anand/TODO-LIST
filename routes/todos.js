var express = require('express');
var router = express.Router();

//Allows routes to be broken down into modular chunks
var db     = require('../models');
var helpers = require('../helpers/todos');

router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodos)	//==========ROUTE 1=================
							//router.get("/",);

							//==========ROUTE 2===================

							//router.post("/",);
router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)
							//=============ROUTE 3================

							//router.get("/:todoId",);

							//===============ROUTE 4=============
							//router.put("/:todoId",);

							//=============ROUTE 5=================
							//router.delete("/:todoId",);

							//module.exports = router;

module.exports = router;

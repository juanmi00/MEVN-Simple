"use strict";
const express = require('express')
const router = express.Router()

const Item = require('../models/Item')


//get all Items
router.get('/', (req,res)=>{
	Item.find(function(err, items){
		if(err) {
			throw err;
		}else{
			res.json(items) ;
		}
	})
})

//add Item
router.post('/',(req,res)=>{
	const item = new Item(req.body)
	item.save()
		.then(item =>{
			res.status(200).json({ item: 'Item agregado' })
		})
		.catch(err => {
			res.status(400).json({ item: 'Error al agregar el item' })
		})
})

//update Item
router.put('/:id',(req,res,next)=>{
	Item.findById(req.params.id , ( err , item )=>{
		if(!item){
			return next(new Error('No se pudo cargar el documento'))
		}else{
			item.name = req.body.name
			item.price = req.body.price
			item.save()
				.then(item =>{
					res.status(200).json({ item: 'Item actualizado' })
				})
				.catch(err => {
					res.status(400).json({ item: 'No se pudo actualizar' })
				})
		}
	})
})

//borrar

router.delete('/:id',(req,res,next)=>{
	Item.findByIdAndRemove(req.params.id , ( err , item )=>{
		if(err){
			res.status(400).json(err)
		}else{
			res.status(200).json({ item: 'Item eliminado' })
		}
	})
})



module.exports = router
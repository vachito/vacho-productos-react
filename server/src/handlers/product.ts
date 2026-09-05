import { Request, Response } from "express"
import Product from "../models/Product.model"

export const getProducts = async (req : Request, res : Response) => {
  try {
    const products = await Product.findAll({
        order : [
            ['id', 'DESC']
        ],
        attributes: {exclude: ['createdAt','updatedAt']}
    })
    res.json({data : products})
  } catch (error) {
    console.log(error)
  }
}

export const createProduct = async (req : Request, res: Response) =>{
    try {
        const product =  await Product.create(req.body)
        res.json(product)
    } catch (error) {
        console.log(error)
    }
}

export const findById = async (req : Request, res : Response) => {
    try {
        const product = await Product.findByPk(Number( req.params.id))
        
        if(!product){
            return res.status(404).json({"error" : "Producto no encontrado"})
        }
        res.json({data : product})
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (req : Request, res : Response) => {
    try {
        const product = await Product.findByPk(Number( req.params.id))
        
        if(!product){
            return res.status(404).json({"error" : "Producto no encontrado"})
        }

        await product.update(req.body)
        res.json({data : product})
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (req : Request, res : Response) => {
    try {
        const product = await Product.findByPk(Number( req.params.id))
        
        if(!product){
            return res.status(404).json({"error" : "Producto no encontrado"})
        }

        await product.destroy()
        res.json({'msg' :'Producto eliminado'})
    } catch (error) {
        console.log(error)
    }
}
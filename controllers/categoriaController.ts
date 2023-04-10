import { Response, Request, request } from "express";
import Categoria from "../models/categoriaModels";

export const getCategoria = async (req:  Request, res: Response) =>{
  const {} = req.params;
    const result = await Categoria.findAll();
    res.status(200).json({
        success: true,
        Message: "getCategoria",
        data: result
    });
};

export const getCategoriaId =async (req: Request, res: Response) => {
    const { id } = req.params;
    const resultId = await Categoria.findByPk(id);

    if(resultId){
        res.status(200).json({
          msg: 'getCategoriaID',
          id,
          resultId
        });
    }else{
        res.status(404).json({
          msg: '  no existe',
        });
    }
};


export const postCategoria = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const { nombre, descripcion, estado, ruta} = req.body;
      const createdAt = new Date();
      const updatedAt = new Date();
  
      const result = await Categoria.create({
        nombre,
        descripcion,
        estado,
        ruta,
        createdAt,
        updatedAt
      });
  
      res.status(202).json({
        success: true,
        Message: "Categoria creada",
        data: result,
        body
      });
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: 'Error al crear la categoría' });
    }
  };

export const putCategoria = (req: Request, res: Response)=>{
    const { id } = req.params;
    const { body } = req;

  res.json({
      msg: 'put usuarios',
      body,
      id
  })
}

export const deleteCategoria = async(req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      await Categoria.destroy({
        where: {
          idcategoria: id
        }
      });
      res.status(200).json({ message: 'Categoría eliminada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(404).json({ message: 'Error al eliminar la categoría' });
    }
  
    res.json({
      message: 'Categoría eliminada',
      id: id
    })
  }

export const deleteCategoriaID = async (req: Request, res: Response) => {
    const  id  = req.params.id;
  
    try {
        await Categoria.destroy({
            where: {
                idcategoria: id
            }
        });
        res.json({ message: `Sección con id ${id} eliminada correctamente` });
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'Error al eliminar la sección' });
    }
  };



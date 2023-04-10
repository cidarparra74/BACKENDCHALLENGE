import { Router } from "express";
import { getCategoria, getCategoriaId, postCategoria, putCategoria, deleteCategoria, deleteCategoriaID } from "../controllers/categoriaController";


const categoriaRouter = Router();

categoriaRouter.get('/', getCategoria);
categoriaRouter.get('/:id', getCategoriaId);
categoriaRouter.post('/', postCategoria);
categoriaRouter.put('/', putCategoria);
categoriaRouter.delete('/', deleteCategoria);
categoriaRouter.delete('/:id', deleteCategoriaID);

export default categoriaRouter;
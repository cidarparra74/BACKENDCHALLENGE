import { DataTypes } from "sequelize";
import db from "../db/conectionConfig";

const Categoria = db.define ('categoria' , {

   idcategoria : {
    type : DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
   },
   nombre : {
    type: DataTypes.STRING,
   },
   descripcion : {
    type: DataTypes.STRING,
   },
   estado: {
    type :  DataTypes.INTEGER,

   },
   ruta: {
    type: DataTypes.STRING,
   }
})
export default Categoria;

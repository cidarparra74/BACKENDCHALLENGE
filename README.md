# BASE DE DATOS 


crear base de datos
CREATE DATABASE mi_bdChallenge;

CREATE TABLE categoria (
  idcategoria BIGINT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255),
  descripcion VARCHAR(255),
  estado TINYINT,
  ruta VARCHAR(255),
  createdAt DATETIME,
  updatedAt DATETIME
);

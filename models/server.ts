import cors from 'cors';
import  express, { Application } from 'express';

import categoriaRouter from '../routes/categoriaRouting';

class Server{
    private app: Application;
    private port: string | undefined;
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use( cors() );
    }
    routes(){
        this.app.use('/api/categoria', categoriaRouter)
    }
    listen (){
        this.app.listen(this.port,()=>{
            console.log("SERVIDOR CORRIENDO EN EL PUERTO", this.port)
        })
    }
}
export default Server;
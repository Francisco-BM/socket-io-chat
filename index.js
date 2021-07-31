const path=require('path');
const express=require('express');
const app=express();


//settings,static file,star the serves= configuracion basica del servidor 

//settings

app.set('port',process.env.PORT||3000);

//static files

app.use(express.static(path.join(__dirname, 'public')));


//star the server

const server= app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
    
    
    
    });
    
//websockets
const socket= require('socket.io');
const io =socket(server);


io.on('connection', (socket)=>{
    console.log('new conection',socket.id);

    socket.on('chat:message', (data)=>{
       io.sockets.emit('chat:message', data);
    });

    socket.on('chat:typing', (data)=> {
    console.log(data);

    })
    
 });

    






//on es para escuchar datos
// emit es para emitir los datos
//broadcast emito a todos menos a mi
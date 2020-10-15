var express =require("express");
var cors = require("cors");
var corsOptions = {origin:"*",optionSucessStatus:200};
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors(corsOptions));

var fprincipal = {
"nombre": "Fuente Principal",
"estado": "Activa",
"nivel de depresión": 20,
"tiempo de exposición": 8
};

var faux= {
"nombre": "Fuente Auxiliar",
"estado": "Inactiva",
"nivel de depresión": 0,
"tiempo de exposición": 0
};

app.get("/FuenteAuxiliar", function(req, res){

res.send(faux);

})

app.post("/fuentes");

app.put("/fuentes");

app.delete("/fuentes");

app.get("/fuentePrincipal",function(req,res){
    
    res.send(fprincipal);
});
app.get("/fuenteAuxiliar",function(req,res){
    
    res.send(faux);
});


app.listen(3000,function(){
    console.log("Api en el puerto 3000");
});
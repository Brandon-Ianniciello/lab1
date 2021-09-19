const url = require('url');
const query = require('query-string');
const math = require('./math');

exports.maths = function(req, res) {
  const reqUrl = url.parse(req.url, true)

  const parsed = query.parse(JSON.stringify(req.url).substr(7));

  const op = parsed["op"];
  const x = parseInt(parsed['x']);
  const y = parseInt(parsed['y']);
  const n = parseInt(parsed['n']);

  console.log(0/0)

  if(op === ' '){
    var response = jsonValues(op,x,y,math.addition(x,y));
  }else if(op === '-'){
    var response = jsonValues(op,x,y,math.soustraction(x,y));
  }else if(op === '*'){
    var response = jsonValues(op,x,y,math.multiplication(x,y));
  }else if(op === '/'){
    var response = jsonValues(op,x,y,math.division(x,y));
  }else if(op === '%'){
    var response = jsonValues(op,x,y,math.modulo(x,y));
  }else if(op === '!'){
    var response = jsonValues(op,x,y,math.factorielle(n),n);
  }else if(op === 'p'){
    var response = jsonValues(op,x,y,math.isPrime(n),n)
  }
  
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}


exports.invalidUrl = function(req, res) {
   var response = [
     {
       "message": "Endpoint incorrect. Les options possibles sont "
     },
     availableEndpoints
   ]
   res.statusCode = 404;
   res.setHeader('content-Type', 'Application/json');
   res.end(JSON.stringify(response))
}


const jsonValues = (op,x,y,resultat,n) => {
  if(op === ' '){
    var response = [
      {
        "op": '+',
        "x" :  x,
        "y" :  y,
        "value" : resultat
      }
    ];
  }else if(op === '/' && y === 0){
    var response = [
      {
        "op": '+',
        "x" :  x,
        "y" :  y,
        "value" : 'Infinity'
      }
    ];
  }else if(op === '!' || op === 'p'){
    var response = [
      {
        "n": n,
        "op": op,
        "value" : resultat
      }
    ];
  }else{
    var response = [
      {
        "op": op,
        "x" :  x,
        "y" :  y,
        "value" : resultat
      }
    ];
  }
  return response;
}
 
const availableEndpoints = [
  {
    method: "GET",
    maths: "/maths"
  }
]
 
//  function setup(){
   
// loadJSON("http://jsonplaceholder.typicode.com/posts",gotData,'jsonp'); 
//  }

//  function Data(gotData){
//    console.log(gotData);
//  }


//  const fs = require('fs');

//  fs.writeFile('newfile.json','hello', (err) =>{
//      if (err) throw err;
//      console.log('file created sucesfully');
//  })
  


// const fetch = require('fetch');
// fetch('http://jsonplaceholder.typicode.com/posts')
// .then(function(resp){

//     return resp.json();
// })
// .then(function(data){
//     console.log(data);
// })

const http= require('http')
const url = "http://jsonplaceholder.typicode.com/posts";
var data = '';
const fs = require('fs');



http.get(url, res => {
  //let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);

    // trial

    fs.writeFile('posts.json',JSON.stringify(data), (err)=>{

        if (err) throw err;
    
        console.log('file created sucessfully');
    })
    
    console.log(data);
  })
}).on('error', err => {
  console.log(err.message);
})
//stringnify data

//const dataToString = JSON.stringify(data)

//writing the json file 

// const fs = require('fs');
// fs.writeFile('posts.json',data, (err)=>{

//     if (err) throw err;

//     console.log('file created sucessfully');
// })

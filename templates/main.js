
var fs = require('fs')


var topHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<style>
.center {
    text-align: center !important;
    background-color: aquamarine !important;
}
.team {
  font-size: 600%;
  font-weight: bold;
}
.bold {
  font-weight: bold;
}
.manager {
  width: 300px !important;
  background-color: red;
  padding: 25px;
  text-align: center;
  margin: 20px;
}

.intern {
  width: 300px !important;
  background-color: yellowgreen;
  padding: 25px;
  text-align: center;
  margin: 20px;
}

.engineer {
  width: 300px !important;
  background-color: grey;
  padding: 25px;
  text-align: center;
  margin: 20px;
}
</style>
</head>
<body>
<div class="jumbotron jumbotron-fluid center">
<h1 class="display-4">My Team</h1>
<div class="container">
</div>
</div>
<div class= "container">
<div class="row">
`


  var footer=  
`
</div>
</body>
</html>`

function generateHtml(array){
    console.log(array)

    // swith call the generate
for (var i =0; i< array.length; i++){
    var role = array[i].getRole()
    console.log(role)
    switch(role){
             case "Manager":
               var card = generateManager(array[i])
                break;
            case "Engineer":
                    var card = generateEng(array[i])
                break;
            case "Intern":
                    var card = generateInt(array[i])
                break;
    }
    console.log(card)
    topHtml= topHtml + card
}
topHtml = topHtml + footer
console.log(topHtml)
// wirte the html file
fs.writeFile('./team.html', topHtml, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('success')
    }
  })
}

function generateEng(data){
    console.log("eng:", data)
return `<div class="card engineer" style="width: 18rem;">
<ul class="list-group list-group-flush">
  <li class="list-group-item bold">Engineer</li>
  <li class="list-group-item">${data.name}</li>
  <li class="list-group-item">ID: ${data.id}</li>
  <li class="list-group-item">Email:<br><a href="mailto:${data.email}" target="_top"> ${data.email}</a></li>
  <li class="list-group-item">Github:<a class="nav-link" href="https://www.github.com/${data.github}" target="_blank"> ${data.github}</a> </li>

</ul>
</div>`
}


function generateManager(data){
return `<div class="card manager" style="width: 18rem;">
<ul class="list-group list-group-flush">
  <li class="list-group-item bold">Manager</li>
  <li class="list-group-item">${data.name}</li>
  <li class="list-group-item">ID: ${data.id}</li>
  <li class="list-group-item">Email:<br> <a href="mailto:${data.email}" target="_top"> ${data.email}</a></li>
  <li class="list-group-item">Office Number:<br> ${data.officeNumber}</li>

</ul>
</div>`

}
function generateInt(data){

    return `<div class="card intern" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item bold">Intern</li>
      <li class="list-group-item">${data.name}</li>
      <li class="list-group-item">ID: ${data.id}</li>
      <li class="list-group-item">Email:<br> <a href="mailto:${data.email}" target="_top"> ${data.email}</a></li>
      <li class="list-group-item">School:<br> ${data.school}</li>
    
    </ul>
    </div>`
}


//loop the array manager // add the values // concat with tophtml


// when finish the loop we concat the footer 

// this will give us the whole html

// then wirte the file 

module.exports = generateHtml
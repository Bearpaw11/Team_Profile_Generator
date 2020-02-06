
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
</head>
<body>
    `


  var footer=  
`</body>
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
fs.writeFile('test.html', topHtml, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('success')
      //var html1 = fs.readFileSync('test.html', 'utf8');
      //    var options = { format: 'A4' };
      //     //console.log(html1)
      //     pdf.create(html, options).toFile('./github.pdf', function(err, res) {
      //       if (err) return console.log(err);
      //       console.log(res); // { filename: '/app/businesscard.pdf' }
    }
  })
}

function generateEng(data){
    console.log("eng:", data)
return `<div class="card" style="width: 18rem;">
<ul class="list-group list-group-flush">
  <li class="list-group-item">${data.name}</li>
  <li class="list-group-item">${data.id}</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
</div>`
}


function generateManager(data){
return ``

}
function generateInt(data){

    return ``
}


//loop the array manager // add the values // concat with tophtml


// when finish the loop we cancat the fotter 

// this will give us the whole html

// then wirte the file 

module.exports = generateHtml
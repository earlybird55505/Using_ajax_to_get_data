// Ajax = Assynchronous programming and XML...(2 type)
//   (1) Assynchronous programming...code a error thkaleo code same run korbe na..
//   (2) synchronous programming....code a error thkaleo code run korbe..

//facility..
// Get data without loading the page...






// document.querySelector("#button").addEventListener('click', loading);

// function loading(){
//     // XHR object = XML Http Request()
//     let xhr = new XMLHttpRequest()
//     console.log(xhr)

//     xhr.open('GET', 'data.txt', true)

//     xhr.onload = function(){
//         // HTTP status
//         // 200: ok,
//         // 403: Forbidden - data pay but load hoy na.
//         // 404: not found - data pay na

//         if(this.status === 200){
//             // console.log(this.status)
//             console.log(this.responseText)
//             document.querySelector('#output').innerHTML = `<h3>${this.responseText}</h3>`
//         }
//     }
//     xhr.send()


//     // aro 2 ta way maddome ajax code kora jay...
//     // xhr.onreadystatechange = function(){}
//     // xhr.onprogress = function(){}
// }







// API link.....(icndb.com)...

document.getElementById('button').addEventListener('click', loadJoke);

function loadJoke(e){
    let number = document.getElementById('number-joke').value;
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

    xhr.onprogress = function(){
        document.getElementById('output').innerHTML = `<h3>Loading....</h3>`
    }

    xhr.onload = function(){
        if(this.status === 200){
            let data = JSON.parse(this.responseText)
            // let jokes = data.value
            let jokes = data.value
            
            let output = "<ol>"
            
            jokes.forEach(function(items){
                output += `<li>${items.joke}</li>`

                console.log(items.joke)
            })

            output += "</ol>"
            document.getElementById('output').innerHTML = output;

        }
    }
    xhr.send();
}





document.getElementById('button').addEventListener('click', colors);

function colors(){
    document.body.style.background = `linear-gradient(
        45deg, #eb45eb, transparent)`
    
}

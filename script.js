let person = document.getElementById('persons')
let randoBtn = document.getElementById('randomBtn')
let baseUrl = 'https://jsonplaceholder.typicode.com/users/'



async function getThem(id){
     let response = await fetch(`${baseUrl}${id}`)
     let data = await response.json()
     console.log(data)

     person.innerHTML = `<p>Name: ${data.name}</p><p>Phone: ${data.phone}</p><p>Email: ${data.email}</p>`
}

randoBtn.onclick = () => {
   let rando = Math.floor(Math.random() * 10) + 1
  
   getThem(rando)
}


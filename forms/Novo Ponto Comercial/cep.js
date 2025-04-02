$("#cep").blur(()=>{
    fetch("http://viacep.com.br/ws/01001000/json/").then((response)=>{
        response = response.json()
    }).then((json)=>{
        console.log(json);
        
    })
})
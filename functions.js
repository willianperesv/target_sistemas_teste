//===============Teste 1 - Soma ===================//

$(document).ready(function(){
var INDICE = 13
var SOMA = 0
for(let K = 0; K < INDICE; K++){
 K = K + 1
 SOMA = SOMA + K
}
$('.teste-1').append("O Resultado da soma é: ", SOMA)

})


//=============== Teste 2 - Fibonacci =========================//




function Fibonacci(numbers){
  
    var arrFiboSequency = []
    
    var numbers = parseInt($('#number').val())
   
    
    let n1 = 0
    let n2 = 1
    let n3 = 0
    for(let i = 0;n3 < 10000; i++ ){
        n3 = n1 + n2
        arrFiboSequency.push(n3)
        n1 = n2
        n2 = n3
       
    }
  

     if(arrFiboSequency.includes(numbers) == true){
        $('#resultFibo').html(`<p class="my-2">${numbers} pertence a sequência de Fibonacci </p>`)
     
        $('#number').val("")
       
     }else{
        $('#resultFibo').html(`${numbers} não pertence a sequência de Fibonacci`)
        $('#number').val("")
       
     }
     
}

//============= Teste 3 - Faturamento Distribuidora ===========================//
$(document).ready(function(){


    $.ajax({url:'dados.json'}).then(function(data){
        
        // maior valor do mês
         const maxValue = data.reduce(function(prev, current) { 
            return prev.valor > current.valor ? prev : current; 
          });
          $('#max-invoicing').append(` <tbody><td>R$: ${maxValue.valor.toFixed(2)}</td> <td>${maxValue.dia}</td> </tbody>` );;
  
          
        //Menores Valores
          const min = data.reduce(function(prev, current) { 
            return prev.valor < current.valor ? prev : current; 
          });
        
          var minV = min.valor
          var minValues = []
          
          data.forEach(function(val){
           if (Number(val.valor) <= minV){
                 minValues.push(val.dia) 
                 } 
          });
          $('#min-invoicing').append(` <tbody><td>R$: ${minV}</td> <td>${minValues}</td> </tbody>` );;
        
          
          
          // Dias acima da média
          const total = data.reduce((total, valor) => total + valor.valor, 0);
          const average = total / 30
          const daysAbove = []
          data.forEach(function(days){
            if (Number(days.valor) > average){
                  daysAbove.push(days.dia) 
                  } 
           });
           $('#days-above-invoicing').append(` <tbody><td> ${daysAbove.length}</td> <td>${daysAbove}</td> </tbody>` );;
           $('#daysOfHighInvoicing').html(`<p class="my-2"> Numero de dias acima da média: ${daysAbove.length}  <br> Nos dias: R$ ${daysAbove}. <br> <hr>`)
          })
          
         
         
})
//==========Teste 04 - Percentual dos estados===========================//

$(document).ready(function(){
    const states = [
        {
            estado: "SP", faturamento: 67836.43
        },
        {
            estado: "RJ", faturamento: 36678.66
        },
        {
            estado: "MG", faturamento: 29229.88
        },
        {
            estado: "ES", faturamento: 27165.48
        },
        {
            estado: "Outros", faturamento: 19849.53
        }

    ] 


    const totalStates = states.reduce((total, valor) => total + valor.faturamento, 0);
     states.forEach(function(st){
         const fat = st.faturamento * 100 / totalStates
        $('#percents').append(` <tbody><td>${st.estado}</td> <td>${fat.toFixed(2)}</td> </tbody>` );;
     })

    
    
})

//=============Teste 05 - Reverte String =====================//

function reverseStrings(str) {
  $('#reverse').empty()
   var str = $('#inputString').val()   

    var newString = "" 
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i]
    }
    $('#reverse').append(` ${newString}`)

  }



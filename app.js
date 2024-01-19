// (function(){
//     const form = document.querySelector("#message-form")
//     const message = document.querySelector("#message")
//     const feedBack = document.querySelector(".feedback")
//     const messageContent = document.querySelector(".message-content") 

//     form.addEventListener("submit", function(e){
//         e.preventDefault()
//         if(message.value === ''){
//             feedBack.classList.add('show')
//             setTimeout(function(){
//                 feedBack.classList.remove('show')
//             }, 4000)    
//         }  else {
//             messageContent.textContent = message.value
//             message.value = ''
//         }
//     })

// })()
    const form = document.querySelector("#message-form")
    const message = document.querySelector("#message")
    const feedBack = document.querySelector(".feedback")
    const messageContent = document.querySelector(".message-content") 

    form.addEventListener("submit", function(e){
        e.preventDefault()
        if(message.value === ''){
            feedBack.classList.add('show')
            setTimeout(function(){
                feedBack.classList.remove('show')
            }, 4000)    
        }  else {
            messageContent.textContent = message.value
            message.value = ''
        }
    })




let btn=document.querySelector(".fa-eye");function entrar(){let e=document.querySelector("#usuario"),t=document.querySelector("#userLabel"),r=document.querySelector("#senha"),s=document.querySelector("#senhaLabel"),o=document.querySelector("#msgError"),l=[],u={nome:"Teste",user:"Teste",senha:"abc@234"};if((l=JSON.parse(localStorage.getItem("listaUser")))?.forEach(t=>{e.value==t.userCad&&r.value==t.senhaCad&&(u={nome:t.nomeCad,user:t.userCad,senha:t.senhaCad})}),e.value==u.user&&r.value==u.senha){window.location.href="../index.html";let a=Math.random().toString(16).substr(2);localStorage.setItem("token",a+a),localStoragetorage.setItem("userLogado",JSON.stringify(u))}else t.setAttribute("style","color: red"),e.setAttribute("style","border-color:red"),s.setAttribute("style","color: red"),r.setAttribute("style","border-color: red"),o.setAttribute("style","display: red"),o.innerHTML="Usu\xe1rio ou senha incorretos"("style","display: red"),e.focus()}btn.addEventListener("click",()=>{let e=document.querySelector("#senha");"password"==e.getAttribute("type")?e.setAttribute("type","text"):e.setAttribute("type","password")}),setTimeout(()=>{userLabel.setAttribute("style","color: white"),usuario.setAttribute("style","border-color: white"),senhaLabel.setAttribute("style","color: white"),senha.setAttribute("style","border-color: white"),msgError.setAttribute("style","display: block; color: white; ;")},3e3);
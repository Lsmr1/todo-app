function alterarTema() {
    const tema = localStorage.getItem("tema");
    const body = document.querySelector("body");
    const button = document.querySelector(".tema-button");
  
    if (tema) {
      let novoTema;
  
      if (tema === "light") {
        novoTema = "dark";
        button.innerHTML = `<img src="/img/sun-icon.png" alt="ícone do sol">`;
        body.classList.remove("light");
        body.classList.add("dark");
      } else {
        novoTema = "light";
        button.innerHTML = `<img src="/img/moon-icon.png" alt="ícone de Lua">`;
        body.classList.remove("dark");
        body.classList.add("light");
      }
  
      localStorage.setItem("tema", novoTema);
      return;
    }
  
    localStorage.setItem("tema", "dark");
    body.classList.add("dark");
  }
  
  function verificarTema() {
    const tema = localStorage.getItem("tema");
    const body = document.querySelector("body");
    const button = document.querySelector(".tema-button");
  
    if (tema) {
      if (tema === "dark") {
        body.classList.add("dark");
        button.innerHTML = `<img src="/img/sun-icon.png" alt="ícone do sol">`;
      } else {
        body.classList.add("light");
        button.innerHTML = `<img src="/img/moon-icon.png" alt="ícone de Lua">`;
      }
    }
  }
  
  verificarTema();
  
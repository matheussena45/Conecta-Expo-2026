const btnAdm = document.getElementById("btnAdm");
const popup = document.getElementById("popupAdm");
const fechar = document.getElementById("fecharAdm");

if (btnAdm && popup && fechar) {
    btnAdm.onclick = () => {
        popup.style.display = "flex";
    };

    fechar.onclick = () => {
        popup.style.display = "none";
    };
}

const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.onclick = () => {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const userCorreto = "admin";
    const senhaCorreta = "#SebraeExpo30";

    if (usuario === userCorreto && senha === senhaCorreta) {
        window.location.href = "admin.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
};


function abrirModal() {
  const stand = document.getElementById("stand").value;

  if (!stand) {
    alert("Selecione um stand!");
    return;
  }

  document.getElementById("standSelecionado").innerText = `Stand: ${stand}`;
  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}
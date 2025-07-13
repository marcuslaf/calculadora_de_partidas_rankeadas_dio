function calcularRanking(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas

    let nivel
    if (saldoVitorias <= 10) {
        nivel = "Ferro"
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze"
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata"
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro"
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante"
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário"
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal"
    }

    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel,
    }
}

function obterClasseNivel(nivel) {
    const classes = {
        Ferro: "ferro",
        Bronze: "bronze",
        Prata: "prata",
        Ouro: "ouro",
        Diamante: "diamante",
        Lendário: "lendario",
        Imortal: "imortal",
    }
    return classes[nivel] || ""
}

function exibirResultado(saldoVitorias, nivel) {
    const resultDiv = document.getElementById("result")
    const saldoElement = document.getElementById("saldoValue")
    const nivelElement = document.getElementById("nivelValue")
    const messageElement = document.getElementById("message")

    saldoElement.textContent = saldoVitorias
    nivelElement.textContent = nivel
    nivelElement.className = `value nivel-badge ${obterClasseNivel(nivel)}`

    messageElement.textContent = `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`

    resultDiv.classList.remove("hidden")

    resultDiv.scrollIntoView({ behavior: "smooth" })
}

document.getElementById("rankingForm").addEventListener("submit", (e) => {
    e.preventDefault()

    const vitorias = Number.parseInt(document.getElementById("victories").value)
    const derrotas = Number.parseInt(document.getElementById("defeats").value)

    if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
        alert("Por favor, insira números válidos para vitórias e derrotas.")
        return
    }

    const resultado = calcularRanking(vitorias, derrotas)

    exibirResultado(resultado.saldoVitorias, resultado.nivel)
})

document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener("focus", function () {
        this.parentElement.style.transform = "scale(1.02)"
    })

    input.addEventListener("blur", function () {
        this.parentElement.style.transform = "scale(1)"
    })
})
function toggleSubItens(button) {
  var subItens = button.nextElementSibling;
  if (subItens.style.display === "block") {
    subItens.style.display = "none";
  } else {
    subItens.style.display = "block";
  }
}

window.onload = function() {
  var subitens = document.getElementsByClassName("esconder");
  for (var i = 0; i < subitens.length; i++) {
    subitens[i].style.display = "none";
  }
}

$(document).ready(function() {
  $("#search-input").on("input", function() {
    var searchTerm = $(this).val().toLowerCase();
    var selectedCategories = [];

    $("input[type=checkbox]:checked").each(function() {
      selectedCategories.push($(this).val());
    });

    $(".card").each(function() {
      var cardText = $(this).text().toLowerCase();
      var cardCategories = $(this).data("species") + " " + $(this).data("gender") + " " + $(this).data("age");

      var matchesSearchTerm = cardText.includes(searchTerm);

      var matchesCategory = selectedCategories.some(function(category) {
        return cardCategories.includes(category);
      });

      if (matchesSearchTerm && matchesCategory) {
        $(this).show();
      } else {
        $(this).hide();
      }

      if (cardText.includes(searchTerm)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});




document.addEventListener('DOMContentLoaded', function() {
  var checkboxCachorro = document.getElementById('checkbox-cachorro');
  var checkboxGato = document.getElementById('checkbox-gato');
  var checkboxFemea = document.getElementById('checkbox-femea');
  var checkboxMacho = document.getElementById('checkbox-macho');
  var checkboxFilhote = document.getElementById('checkbox-filhote');
  var checkboxAdulto = document.getElementById('checkbox-adulto');

  checkboxCachorro.addEventListener('change', function() {
    if (checkboxCachorro.checked) {
      checkboxGato.checked = false;
      checkboxGato.disabled = true;
    } else {
      checkboxGato.disabled = false;
    }
    filterCards();
  });

  checkboxGato.addEventListener('change', function() {
    if (checkboxGato.checked) {
      checkboxCachorro.checked = false;
      checkboxCachorro.disabled = true;
    } else {
      checkboxCachorro.disabled = false;
    }
    filterCards();
  });

  checkboxFemea.addEventListener('change', function() {
    if (checkboxFemea.checked) {
      checkboxMacho.checked = false;
      checkboxMacho.disabled = true;
    } else {
      checkboxMacho.disabled = false;
    }
    filterCards();
  });

  checkboxMacho.addEventListener('change', function() {
    if (checkboxMacho.checked) {
      checkboxFemea.checked = false;
      checkboxFemea.disabled = true;
    } else {
      checkboxFemea.disabled = false;
    }
    filterCards();
  });

  checkboxFilhote.addEventListener('change', function() {
    if (checkboxFilhote.checked) {
      checkboxAdulto.checked = false;
      checkboxAdulto.disabled = true;
    } else {
      checkboxAdulto.disabled = false;
    }
    filterCards();
  });

  checkboxAdulto.addEventListener('change', function() {
    if (checkboxAdulto.checked) {
      checkboxFilhote.checked = false;
      checkboxFilhote.disabled = true;
    } else {
      checkboxFilhote.disabled = false;
    }
    filterCards();
  });

  function filterCards() {
    var cards = document.getElementsByClassName('card');

    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var isCachorro = card.classList.contains('cachorro');
      var isGato = card.classList.contains('gato');
      var isFemea = card.classList.contains('femea');
      var isMacho = card.classList.contains('macho');
      var isFilhote = card.classList.contains('filhote');
      var isAdulto = card.classList.contains('adulto');

      var showCard = true;

      if (checkboxCachorro.checked && !isCachorro) {
        showCard = false;
      }

      if (checkboxGato.checked && !isGato) {
        showCard = false;
      }

      if (checkboxFemea.checked && !isFemea) {
        showCard = false;
      }

      if (checkboxMacho.checked && !isMacho) {
        showCard = false;
      }

      if (checkboxFilhote.checked && !isFilhote) {
        showCard = false;
      }

      if (checkboxAdulto.checked && !isAdulto) {
        showCard = false;
      }

      if (checkboxCachorro.checked && checkboxGato.checked && !(isCachorro || isGato)) {
        showCard = false;
      }

      if (checkboxFemea.checked && checkboxMacho.checked && !(isFemea || isMacho)) {
        showCard = false;
      }

      if (checkboxFilhote.checked && checkboxAdulto.checked && !(isFilhote || isAdulto)) {
        showCard = false;
      }

      if (checkboxCachorro.checked && checkboxGato.checked) {
        showCard = true;
      }
      if (checkboxCachorro.checked && checkboxGato.checked && checkboxFemea.checked) {
        showCard = true;
      }

      if (showCard) {
        card.classList.remove('esconder');
      } else {
        card.classList.add('esconder');
      }
    }
  }
});

// Paulo // 

var animais = [{
  "cachorros": [
    {
      "nome": "Floquinho",
      "raça": "Dachshund",
      "idade": "3 anos",
      "sexo": "Macho"
      
    },
    {
      "nome": "Scott",
      "raça": "Border Collie",
      "idade": "6 anos",
      "sexo": "Macho"
    },
    {
      "nome": "Nandinha",
      "raça": "Poodle",
      "idade": "10 anos",
      "sexo": "Femea"
    }
  ],
  "gatos": [
    {
      "nome": "Eleutério",
      "raça": "Maine Coon",
      "idade": "2 anos",
      "sexo": "Macho"
    },
    {
      "nome": "Beethoven",
      "raça": "Siamês",
      "idade": "8 anos",
      "sexo": "Macho"
    },
    {
      "nome": "Marie",
      "raça": "Persa",
      "idade": "4 anos",
      "sexo": "Femea"
    },
    {
      "nome": "Maxwell",
      "raça": "Gato Laranja",
      "idade": "1 ano",
      "sexo": "Macho"
    },
    {
      "nome": "Kic 8462852",
      "raça": "Indefinida",
      "idade": "2 meses",
      "sexo": "Macho"
    },
  ]
}];

function imprimirNomeCard1(x) {
  let divNomeCachorro = document.getElementById('nomec1');
  let cachorro = animais[0].cachorros[x];
  divNomeCachorro.innerHTML = `<h3>` + cachorro.nome + `</h3>`;
  if (document.getElementById("checkbox-cachorro").checked) {
    document.getElementById("nomec1").parentNode.parentNode.classList.add("especie-cachorro");
  } else {
    document.getElementById("nomec1").parentNode.parentNode.classList.remove("especie-cachorro");
  }
  if (document.getElementById("checkbox-gato").checked) {
    document.getElementById("nomec1").parentNode.parentNode.classList.add("especie-gato");
  } else {
    document.getElementById("nomec1").parentNode.parentNode.classList.remove("especie-gato");
  }
}

function imprimirNomeCard2(x) {
  let divNomeCachorro = document.getElementById('nomec2');
  let cachorro = animais[0].cachorros[x];
  divNomeCachorro.innerHTML = `<h3>` + cachorro.nome + `</h3>`;
  if (document.getElementById("checkbox-cachorro").checked) {
    document.getElementById("nomec2").parentNode.parentNode.classList.add("especie-cachorro");
  } else {
    document.getElementById("nomec2").parentNode.parentNode.classList.remove("especie-cachorro");
  }
  if (document.getElementById("checkbox-gato").checked) {
    document.getElementById("nomec2").parentNode.parentNode.classList.add("especie-gato");
  } else {
    document.getElementById("nomec2").parentNode.parentNode.classList.remove("especie-gato");
  }
}

function imprimirNomeCard3(x) {
  let divNomeCachorro = document.getElementById('nomec3');
  let cachorro = animais[0].cachorros[x];
  divNomeCachorro.innerHTML = `<h3>` + cachorro.nome + `</h3>`;
  if (document.getElementById("checkbox-cachorro").checked) {
    document.getElementById("nomec3").parentNode.parentNode.classList.add("especie-cachorro");
  } else {
    document.getElementById("nomec3").parentNode.parentNode.classList.remove("especie-cachorro");
  }
  if (document.getElementById("checkbox-gato").checked) {
    document.getElementById("nomec3").parentNode.parentNode.classList.add("especie-gato");
  } else {
    document.getElementById("nomec3").parentNode.parentNode.classList.remove("especie-gato");
  }
}

function imprimirNomeCard4(x) {
  let divNomeGato = document.getElementById('nomeg1');
  let gato = animais[0].gatos[x];
  divNomeGato.innerHTML = `<h3>` + gato.nome + `</h3>`;
  if (document.getElementById("checkbox-cachorro").checked) {
    document.getElementById("nomeg1").parentNode.parentNode.classList.add("especie-cachorro");
  } else {
    document.getElementById("nomeg1").parentNode.parentNode.classList.remove("especie-cachorro");
  }
  if (document.getElementById("checkbox-gato").checked) {
    document.getElementById("nomeg1").parentNode.parentNode.classList.add("especie-gato");
  } else {
    document.getElementById("nomeg1").parentNode.parentNode.classList.remove("especie-gato");
  }
}

function imprimirNomeCard5(x) {
  let divNomeGato = document.getElementById('nomeg2');
  let gato = animais[0].gatos[x];
  divNomeGato.innerHTML = `<h3>` + gato.nome + `</h3>`;
  if (document.getElementById("checkbox-cachorro").checked) {
    document.getElementById("nomeg2").parentNode.parentNode.classList.add("especie-cachorro");
  } else {
    document.getElementById("nomeg2").parentNode.parentNode.classList.remove("especie-cachorro");
  }
  if (document.getElementById("checkbox-gato").checked) {
    document.getElementById("nomeg2").parentNode.parentNode.classList.add("especie-gato");
  } else {
    document.getElementById("nomeg2").parentNode.parentNode.classList.remove("especie-gato");
  }
}

function imprimirNomeCard6(x) {
  let divNomeGato = document.getElementById('nomeg3');
  let gato = animais[0].gatos[x];
  divNomeGato.innerHTML = `<h3>` + gato.nome + `</h3>`;
  if (document.getElementById("checkbox-cachorro").checked) {
    document.getElementById("nomeg3").parentNode.parentNode.classList.add("especie-cachorro");
  } else {
    document.getElementById("nomeg3").parentNode.parentNode.classList.remove("especie-cachorro");
  }
  if (document.getElementById("checkbox-gato").checked) {
    document.getElementById("nomeg3").parentNode.parentNode.classList.add("especie-gato");
  } else {
    document.getElementById("nomeg3").parentNode.parentNode.classList.remove("especie-gato");
  }
}

function imprimirNomeCard7(x) {
  let divNomeGato = document.getElementById('nomeg4');
  let gato = animais[0].gatos[x];
  divNomeGato.innerHTML = `<h3>` + gato.nome + `</h3>`;
  if (document.getElementById("checkbox-cachorro").checked) {
    document.getElementById("nomeg4").parentNode.parentNode.classList.add("especie-cachorro");
  } else {
    document.getElementById("nomeg4").parentNode.parentNode.classList.remove("especie-cachorro");
  }
  if (document.getElementById("checkbox-gato").checked) {
    document.getElementById("nomeg4").parentNode.parentNode.classList.add("especie-gato");
  } else {
    document.getElementById("nomeg4").parentNode.parentNode.classList.remove("especie-gato");
  }
}

function imprimirNomeCard8(x) {
  let divNomeGato = document.getElementById('nomeg5');
  let gato = animais[0].gatos[x];
  divNomeGato.innerHTML = `<h3>` + gato.nome + `</h3>`;
  if (document.getElementById("checkbox-cachorro").checked) {
    document.getElementById("nomeg5").parentNode.parentNode.classList.add("especie-cachorro");
  } else {
    document.getElementById("nomeg5").parentNode.parentNode.classList.remove("especie-cachorro");
  }
  if (document.getElementById("checkbox-gato").checked) {
    document.getElementById("nomeg5").parentNode.parentNode.classList.add("especie-gato");
  } else {
    document.getElementById("nomeg5").parentNode.parentNode.classList.remove("especie-gato");
  }
}

function imprimirDadosCard1(x) {
  let divDadosCachorro = document.getElementById('dadosc1');
  let cachorro = animais[0].cachorros[x];
  divDadosCachorro.innerHTML = `<p>Raça: ` + cachorro.raça + `</p><p>Idade: ` + cachorro.idade + `</p>`;
}

function imprimirDadosCard2(x) {
  let divDadosCachorro = document.getElementById('dadosc2');
  let cachorro = animais[0].cachorros[x];
  divDadosCachorro.innerHTML = `<p>Raça: ` + cachorro.raça + `</p><p>Idade: ` + cachorro.idade + `</p>`;
}

function imprimirDadosCard3(x) {
  let divDadosCachorro = document.getElementById('dadosc3');
  let cachorro = animais[0].cachorros[x];
  divDadosCachorro.innerHTML = `<p>Raça: ` + cachorro.raça + `</p><p>Idade: ` + cachorro.idade + `</p>`;
}

function imprimirDadosCard4(x) {
  let divDadosGato = document.getElementById('dadosg1');
  let gato = animais[0].gatos[x];
  divDadosGato.innerHTML = `<p>Raça: ` + gato.raça + `</p><p>Idade: ` + gato.idade + `</p>`;
}

function imprimirDadosCard5(x) {
  let divDadosGato = document.getElementById('dadosg2');
  let gato = animais[0].gatos[x];
  divDadosGato.innerHTML = `<p>Raça: ` + gato.raça + `</p><p>Idade: ` + gato.idade + `</p>`;
}

function imprimirDadosCard6(x) {
  let divDadosGato = document.getElementById('dadosg3');
  let gato = animais[0].gatos[x];
  divDadosGato.innerHTML = `<p>Raça: ` + gato.raça + `</p><p>Idade: ` + gato.idade + `</p>`;
}

function imprimirDadosCard7(x) {
  let divDadosGato = document.getElementById('dadosg4');
  let gato = animais[0].gatos[x];
  divDadosGato.innerHTML = `<p>Raça: ` + gato.raça + `</p><p>Idade: ` + gato.idade + `</p>`;
}

function imprimirDadosCard8(x) {
  let divDadosGato = document.getElementById('dadosg5');
  let gato = animais[0].gatos[x];
  divDadosGato.innerHTML = `<p>Raça: ` + gato.raça + `</p><p>Idade: ` + gato.idade + `</p>`;
}


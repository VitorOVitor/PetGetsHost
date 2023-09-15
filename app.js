const database = (function () {
  const dbName = 'formulariosPetGets';

  function getFormData() {
    const formData = localStorage.getItem(dbName);
    if (formData) {
      return JSON.parse(formData);
    } else {
      return [];
    }
  }

  function saveFormData(formData) {
    localStorage.setItem(dbName, JSON.stringify(formData));
  }

  return {
    getFormData,
    saveFormData
  };
})();

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formPetGets');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = getFormData();
    saveFormData(formData);
    form.reset();
  });

  function getFormData() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const nomeAnimal = document.getElementById('nome-animal').value;
    const tipo = document.getElementById('tipo').value;
    const outroTipo = document.getElementById('outroTipo').value;
    const sexo = document.getElementById('sexo').value;
    const idade = document.getElementById('idade').value;
    const racaAnimal = document.getElementById('raca-animal').value;
    const personalidadeAnimal = document.getElementById('personalidade-animal').value;
    const vermifugado = document.getElementById('vermifugado').value;
    const vacina = document.getElementById('vacina').value;
    const castrado = document.getElementById('castrado').value;
    const imagem = document.getElementById('imagem').files[0];

    return {
      nome,
      endereco,
      email,
      telefone,
      nomeAnimal,
      tipo: tipo === 'Outro' ? outroTipo : tipo,
      sexo,
      idade,
      racaAnimal,
      personalidadeAnimal,
      vermifugado,
      vacina,
      castrado,
      imagem: imagem ? URL.createObjectURL(imagem) : ''
    };
  }

  function saveFormData(formData) {
    const savedData = database.getFormData();
    savedData.push(formData);
    database.saveFormData(savedData);
  }
});
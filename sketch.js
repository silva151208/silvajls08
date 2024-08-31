let ratingDropdown;
let ageInput;
let warningMessage;
let submitButton;
let suggestionMessage;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(16);

  // Título
  createElement('h1', 'Verificação de Idade').position(100, 10);

  // Dropdown para a classificação indicativa
  createElement('label', 'Classificação Indicativa:').position(20, 60);
  ratingDropdown = createSelect();
  ratingDropdown.position(20, 90);
  ratingDropdown.option('Livre', 0);
  ratingDropdown.option('10+', 10);
  ratingDropdown.option('12+', 12);
  ratingDropdown.option('14+', 14);
  ratingDropdown.option('16+', 16);
  ratingDropdown.option('18+', 18);

  // Input para a idade
  createElement('label', 'Idade:').position(20, 130);
  ageInput = createInput();
  ageInput.position(20, 160);
  ageInput.attribute('type', 'number');

  // Botão de envio
  submitButton = createButton('Verificar');
  submitButton.position(20, 200);
  submitButton.mousePressed(checkAge);

  // Mensagem de aviso
  warningMessage = createP('Sua idade não é adequada para a classificação indicativa selecionada!');
  warningMessage.position(20, 230);
  warningMessage.style('color', 'red');
  warningMessage.hide();

  // Mensagem de sugestão
  suggestionMessage = createP('');
  suggestionMessage.position(20, 260);
  suggestionMessage.style('color', 'green');
  suggestionMessage.hide();
}

function checkAge() {
  let rating = parseInt(ratingDropdown.value());
  let age = parseInt(ageInput.value());

  let movies = {
    0: "Toy Story",
    10: "Harry Potter e a Pedra Filosofal",
    12: "Os Vingadores",
    14: "Homem-Aranha",
    16: "Mad Max: Estrada da Fúria",
    18: "O Exterminador do Futuro"
  };

  if (age < rating) {
    warningMessage.show();
    suggestionMessage.hide();
  } else {
    warningMessage.hide();
    suggestionMessage.html('Idade adequada! Sugestão de filme: ' + movies[rating]);
    suggestionMessage.show();
  }
}

function draw() {
  background(255);
}


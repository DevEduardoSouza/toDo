// selecionar btn que abre o meu "dialog"
const btnOnpenDialog = document.querySelector('#add-btn-task');

// selecionar meu "dialog"
const dialog = document.querySelector('#task-add');

// Selecionar a div onde  btns que abre o "dialog" está
const divBtns = document.querySelector('#btns');

btnOnpenDialog.addEventListener('click', () => {
  // Mostrar o dialog
  dialog.classList.remove('hide');

  // Esconder os btns de remover e add
  divBtns.classList.add('hide');
});

// 
var elementosList = [];

// Mapear o btn que vai adicionar uma nova task
const btnAddNewTask = document.querySelector('#add-btn');

// Função onde vai adicionar um nova task
function addNewTask() {

  // Selecionar  os INPUTS título e descrição
  const nameTask = document.querySelector('#task-name').value;
  const descriptionTask = document.querySelector('#task-description').value;
  

  // Verificar se estar não está vazio
  if(nameTask && descriptionTask){

    // Selecionar o template
    const template =  document.querySelector('.template');

    // Clonar template
    const newTask = template.cloneNode(true);

    /*   Agora fazer as mudanças    */

    newTask.querySelector('.task-title').textContent = nameTask;
    newTask.querySelector('.task-description').textContent = descriptionTask;
    newTask.querySelector('.date').textContent = getDate();
    newTask.querySelector('.task-name').textContent = 'Eduardo';
    
    //Remover as classes que não serão mais usadas 
    newTask.classList.remove('hide', 'template');

    // Adicionar os elementos na lista
    const list = document.querySelector('#task-list');
    list.appendChild(newTask);
    elementosList.push(newTask);

    // Limpar os inputs
    document.querySelector('#task-name').value = '';
    document.querySelector('#task-description').value = '';

    // função de voltar
    // Selecionar o btn de voltar


    //Personalizando o checkBox para quando clicar na aria da li ele ser ativado
    const checkbox = newTask.querySelector('.task-checkbox input');

    newTask.addEventListener('click', ()=>{
      if(checkbox.checked) checkbox.checked=false;
      else{
        checkbox.checked=true;
        closeDialog();
      } 
    });
   
    // Remover elementos
    const btnRemove = document.querySelector('#remove-btn');
    btnRemove.addEventListener('click', ()=>{

      elementosList.map((e)=>{
        const elemento = e.querySelector('.task-checkbox input');
        if(elemento.checked){
          // remover  do dom
          e.remove();
          
          // remover do vetor
          const index = elementosList.indexOf(e);
          elementosList.splice(index, 1);

          // Atualizar o total
          updateLength();
        }
      });
      
    });
  }
  
}

//Função para atualizar a quantidade de tarefas
function updateLength() {
  const tasksLength = document.querySelector('#tasks-length');
  tasksLength.textContent = elementosList.length;
}
btnAddNewTask.addEventListener('click', (e)=>{
  e.preventDefault();
  addNewTask();
  // console.log(elementosList);
  updateLength();
});

// Função para retornar a data atual
function getDate() {
  const date = new Date();

  const month = date.toDateString().slice(4, 8);
  const day = date.getDate();
  const year = date.getFullYear();
  const dateFormat = day+' '+month+' '+year;

  return dateFormat;
}


// Remover o dialog
const btnBack = document.querySelector('#back-btn');
btnBack.addEventListener('click', (e)=>{
      e.preventDefault();
      
      closeDialog();
});

// Função para fechar o dialog
function closeDialog() {
  divBtns.classList.remove('hide');
  dialog.classList.add('hide');
}

// user e date
document.querySelector('#user-btn').addEventListener('click', (e)=>{
  e.preventDefault();
});
document.querySelector('#date-btn').addEventListener('click', (e)=>{
  e.preventDefault();
});



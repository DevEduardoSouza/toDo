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
    newTask.querySelector('.date').textContent = '12 jul 2033';
    newTask.querySelector('.task-name').textContent = 'Eduardo';
    
    //Remover as classes que não serão mais usadas 
    newTask.classList.remove('hide', 'template');

    // Adicionar os elementos na lista
    const list = document.querySelector('#task-list');
    list.appendChild(newTask);

    // Limpar os inputs
    document.querySelector('#task-name').value = '';
    document.querySelector('#task-description').value = '';
   
 
  }else{
    console.log('vaxio');
  }
  
}

btnAddNewTask.addEventListener('click', (e)=>{
  e.preventDefault();
  addNewTask();
});

function ifi(){

    const search = document.querySelector('.textbox');
    const searchEngine = document.querySelector('.search');
  
    let nameState = JSON.parse(localStorage.getItem('myName')) || [];


//searchKey
    function searchBox(event){
      if(event.keyCode == 13){
       window.open (`https://google.com/search?q=${search.value}`)
        search.value = '';
      } 
    }
    
    search.addEventListener('keyup',searchBox);

//searchClick
    function searchClick(event){
      window.open(`https://google.com/search?q=${search.value}`)
      search.value = '';
    }

    searchEngine.addEventListener('click',searchClick);
    
// Time
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }  
    function startTime() {
     
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      m = checkTime(m);
      var ampm = h >= 12 ? 'pm' : 'am';
      document.getElementById('time').innerHTML = h + ":" + m + ' ' + ampm;
    }
    setInterval(startTime, 100); 



//todo
const newInput = document.querySelector('#firstinput');
    const ul = document.querySelector('.ul');
    const details = document.querySelector('.details');
    const itemsLefts = document.querySelector('#itemsleft');
    const active = document.querySelector('#active');
    const all = document.querySelector('#all');
    const completed = document.querySelector('#completed');
    const clearcompleted = document.querySelector('#clearcompleted');
    const fas = document.querySelector('.newCheck');

    let id  = function () { return 'querty'
    .split('')
    .sort(() => Math.random () -0.5)
    .join('') +('_') + Math.floor(Math.random()*100)};

    let switchcheck = false;
    let state = JSON.parse(localStorage.getItem('myTodo')) || [];

    function createUI(todos){
      ul.innerHTML = "";
      todos.forEach(todo => {
          var li = document.createElement('li');
          li.classList.add('list-items');

          var check = document.createElement('input');
          check.setAttribute('type', 'checkbox');
          check.setAttribute('data-id',todo.id);
          check.classList.add('secondinput')
          check.checked = todo.completed

          var newp = document.createElement('p');
          newp.setAttribute('data-id',todo.id);
          newp.classList.add('paran');
          newp.textContent = todo.text;

          var spa = document.createElement('button');
          spa.setAttribute('data-id',todo.id);
          spa.classList.add('bttnn')
          spa.textContent = 'x';
          
          li.append(check, newp, spa);
          ul.append(li);

          spa.addEventListener('click',deletetodo);
          fas.addEventListener('click',selectAll);
      });
  }

    function addtodo(event){
        if(event.keyCode==13 && newInput.value){
          state.push({
            completed: false,
            text: newInput.value,
            id: id()
        })
          createUI(state);
          newInput.value ="";
          localStorage.setItem('myTodo',JSON.stringify(state));
        }
      }
      newInput.addEventListener('keyup', addtodo);
      createUI(state);

    function deletetodo(event){
      state = state.filter(todo => todo.id != event.target.dataset.id)
      createUI(state);
      localStorage.setItem('myTodo',JSON.stringify(state));
    }
  
    function selectAll(event){
      if(event.target.checked){
        createUI([]);
        }
        else createUI(state);
        localStorage.setItem('myTodo',JSON.stringify(state));
        }

      }
      ifi();
const projects = [{
    name: 'Survey API',
    link: 'survey-api',
    status: 'Trabalho em progresso',
    thumb: 'surveyapi.png',
    description: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
    type: 'backend',
    tools: ['Javascript', 'Node'],
    github: 'https://github.com/feitosadavi/survey-pet-api'
  }, {
    name: 'MyBooks',
    link: 'mybooks',
    status: 'Trabalho em progresso',
    thumb: 'mybooks.png',
    description: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
    type: 'backend and frontend',
    tools: 'Java, JSP, Bootstrap',
    github: 'https://github.com/feitosadavi/MyBooks'
    
  }, {
    name: 'Social Dogs',
    link: 'social-dogs',
    status: 'Concluído :)',
    thumb: 'socialdogs.png',
    description: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
    type: 'frontend',
    tools: ['Javascript', 'React'],
    github: 'https://github.com/feitosadavi/dogs'
  }]

if (!localStorage.getItem('projects')) localStorage.setItem('projects', JSON.stringify(projects));


let filterList = document.getElementById('filter-list')
for (let filter of filterList.children) {
  filter.addEventListener('click', () => {
    filtrarPor(filter.getAttribute('data-filter'));
  })
}

function filtrarPor (filtro) {
  let projects = document.getElementsByClassName('project');
  for (const project of projects) {
    if (filtro === 'todos' || project.getAttribute('data-type').includes(filtro)){
      project.style.display = 'flex';
    } else {
      project.style.display = 'none';
    }
  }
}


window.addEventListener('load', () => {
  let portifolioWrapper = document.getElementById('portfolio-wrapper');
  for (const project of projects) {
    let div = document.createElement('div');
    div.className = 'project';
    div.setAttribute('data-type', project.type);
    div.onclick = () => {
      location.href = `/src/projeto.html?projeto=${project.link}`
    }

    let img = document.createElement('img');
    img.src = `/imagens/${project.thumb}`

    div.append(img);
    portifolioWrapper.append(div);
  }

})

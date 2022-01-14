const projects = [
  {
    name: 'Survey API',
    link: 'survey-api',
    status: 'Trabalho em progresso',
    thumb: 'surveyapi.png',
    description:
      'A Suvey API é uma API desenvolvida para a criação de sistemas de enquete. Nela você pode criar a sua conta, fazer login e criar e responder enquetes. Este software foi desenvolvido com a intenção de exercitar conhecimentos de arquitetura de software, como: TDD, POO, Arquitetura Limpa e Design Patterns. Este sistema foi desenvolvido com base no treinamento do Rodrigo Manguinho de Arquitetura de Software',
    type: 'backend',
    tools: ['Javascript', 'Node'],
    github: 'https://github.com/feitosadavi/survey-pet-api',
  },
  {
    name: 'MyBooks',
    link: 'mybooks',
    status: 'Concluído :)',
    thumb: 'mybooks.png',
    description:
      'O MyBooks consiste em uma biblioteca para a locação e agendamento para a busca de livros de uma escola. Neste sistema é possível para o aluno, basicamente, criar a sua conta, fazer login, locar os livros cadastrados e marcar o agendamento para o busca dos livros. Foi desenvolvimento como parte do TCC do meu curso Técnico em Informática.',
    type: 'backend and frontend',
    tools: 'Java, JSP, Bootstrap',
    github: 'https://github.com/feitosadavi/MyBooks',
  },
  {
    name: 'Social Dogs',
    link: 'social-dogs',
    url: 'https://social-dogs.herokuapp.com/',
    status: 'Concluído :)',
    thumb: 'socialdogs.png',
    description:
      'A Social Dogs é uma rede social feita para cachorros. Nela o dono do pet pode criar uma conta para o seu bichinho, postar fotos, fazer comentários em outros posts e ter estatísticas acerca do seu engajamento. Este sistema foi feito com base no curso de React Completo da Origamid.',
    type: 'frontend',
    tools: ['Javascript', 'React'],
    github: 'https://github.com/feitosadavi/dogs',
  },
  {
    name: 'Musicapi',
    status: 'Concluído :)',
    thumb: 'musicapi.png',
    description:
      'Uma API para o armazenamento de informações sobre músicas. Este projeto foi desenvolvido para colocar em prática conceitos de microsserviços com Python',
    type: 'backend',
    tools: ['Python', 'Django', 'Django Rest Framework'],
    github: 'https://github.com/feitosadavi/musicapi',
  },
  {
    name: 'Captacao',
    status: 'Em progresso...',
    thumb: 'captacao.jpeg',
    description:
      'Uma aplicação para a captação de carros para concessionárias e compra e venda para usuários. Este projeto foi desenvolvido utilizando boas práticas de código, TDD e Arquitetura Limpa. Para mais informações, entre em contato :)',
    type: 'backend e frontend',
    tools: [
      'Node',
      'MongoDB',
      'Express',
      'Typescript',
      'Jest',
      'React',
      'Material UI',
    ],
    // github: ['https://github.com/feitosadavi/musicapi', 'https://github.com/feitosadavi/musicapi']
  },
];

if (!localStorage.getItem('projects'))
  localStorage.setItem('projects', JSON.stringify(projects));

let filterList = document.getElementById('filter-list');
for (let filter of filterList.children) {
  filter.addEventListener('click', () => {
    filtrarPor(filter.getAttribute('data-filter'));
  });
}

function filtrarPor(filtro) {
  let projects = document.getElementsByClassName('project');
  for (const project of projects) {
    if (
      filtro === 'todos' ||
      project.getAttribute('data-type').includes(filtro)
    ) {
      project.style.display = 'flex';
    } else {
      project.style.display = 'none';
    }
  }
}

window.addEventListener('load', () => {
  let portfolioWrapper = document.getElementById('portfolio-wrapper');
  for (const project of projects) {
    let div = document.createElement('div');
    div.className = 'project';
    div.setAttribute('data-type', project.type);
    div.onclick = () => {
      location.href = `/portfolio/src/projeto.html?projeto=${project.link}`;
    };

    let img = document.createElement('img');
    img.src = `/portfolio/imagens/${project.thumb}`;

    div.append(img);
    portfolioWrapper.append(div);
  }
});

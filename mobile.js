const openNav = document.querySelector('.top');
const closebtn = document.querySelector('.closebtn');
const myNavMenu = document.getElementById('myNav_mobile');
const overlayContent = document.querySelector('.overlay-content');

function openMobileMenu() {
  myNavMenu.style.width = '100%';
}

openNav.addEventListener('click', openMobileMenu);

function closeMobileMenu() {
  myNavMenu.style.width = '0%';
}

closebtn.addEventListener('click', closeMobileMenu);
overlayContent.addEventListener('click', closeMobileMenu);



//pop-up window

const work = document.querySelector('#works');
const projects = [
  {
    id: 1,
    title: 'Tonic',
    image: './images/Desktop/Grid-1/Snapshoot_Portfolio_1.svg',
    imageAlt: 'First Project Image',
    detailsHead : 'CANOPY',
    details: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    image: './images/',
    imageAlt: 'Second Project Image',
    detailsHead : 'CANOPY',
    details: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 3,
    title: 'Tonic',
    image: './images/Desktop/Grid-1/Snapshoot_Portfolio_3.svg',
    imageAlt: 'Third Project Image',
    detailsHead : 'CANOPY',
    details: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    image: './images/Desktop/Grid-1/Snapshoot_Portfolio_4.svg',
    imageAlt: 'Fourth Project Image',
    detailsHead : 'CANOPY',
    details: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
];


for (let i=0; i < projects.length; i++){
  document.querySelector('#home').innerHTML += 
  
  `<div class="work-container" id="project-${projects[i].id}">
  <div class="img img-1">
    <img src="${projects[i].image}" alt="${projects[i].imageAlt}">
    <div class="content">
      <h2>${projects[i].title}</h2>
    <div class="canopy">
        <h4>${projects[i].detailsHead}</h4>
          <ul>
            ${projects[i].details.map(skill=>{
              return `<li>
              <img src="./images/Counter1.png" alt="Counter">
            </li>
            <li class="sub-lang">${skill}</li>`
            }).join('')}
          </ul>
    </div>
    <p class="img-description">${projects[i].description}
    </p>
    <ul class="lang">
    ${projects[i].langs.map(lang=>{
      return `<li class="prog-lang">${lang}</li>`
    }).join('')}    
    </ul>
    <button>See Project</button>
    </div>          
</div>
</div>`
}



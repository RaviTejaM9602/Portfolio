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

// work section window
const projects = [
  {
    id: 1,
    title: 'Tonic',
    image: './images/Desktop/Grid-1/Snapshoot_Portfolio_1.svg',
    imageAlt: 'First Project Image',
    detailsHead: 'CANOPY',
    details: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releated to project 1",
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    image: './images/Desktop/Grid-2/Snapshoot_Portfolio_2.svg',
    imageAlt: 'Second Project Image',
    detailsHead: 'CANOPY',
    details: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releated to project 2",
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 3,
    title: 'Tonic',
    image: './images/Desktop/Grid-3/Snapshoot_Portfolio_3.svg',
    imageAlt: 'Third Project Image',
    detailsHead: 'CANOPY',
    details: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releated to project 3",
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    image: './images/Desktop/Grid-4/Snapshoot_Portfolio_4.svg',
    imageAlt: 'Fourth Project Image',
    detailsHead: 'CANOPY',
    details: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releated to project 4",
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
];

for (let i = 0; i < projects.length; i += 1) {
  document.querySelector('#home').innerHTML += `<div class="work-container" id="project-${projects[i].id}">
  <div class="img img-1">
    <img src="${projects[i].image}" alt="${projects[i].imageAlt}">
    <div class="content">
      <h2>${projects[i].title}</h2>
    <div class="canopy">
        <h4>${projects[i].detailsHead}</h4>
          <ul>${projects[i].details.map((skill) => `<li> <img src="./images/Counter1.png" alt="Counter"> </li>  <li class="sub-lang">${skill}</li>`).join('')};
          </ul>
    </div>
    <p class="img-description">${projects[i].description} </p>
    <ul class="lang">                 
    ${projects[i].langs.map((lang) => `<li class="prog-lang">${lang}</li>`).join('')};   
    </ul>
    <button>See Project</button>
    </div>          
</div>
</div>`;
}

const modalhtml = ` 
<div class="modal" id="modal">
           <div class="modal-header">
              <h3 class="modal-title">title</h3>
              <button class="close-button">&times;</button>
           </div>
          <div class="canopy modal-subTitle">
            <h4 id="sub-canopy">Canopy</h4>
              <ul>
                <li>
                <img src="./images/Counter1.png" alt="Counter">
                </li>
                <li class="sub-lang">Back End Dev</li>
                <li>
                  <img src="./images/Counter1.png" alt="Counter">
                </li> 
                <li class="sub-lang">2015</li>
              </ul>
        </div>
        <img src="./images/Desktop/Grid-1/Snapshoot_Portfolio_1.svg" alt="First-Project">
        <div class="modal-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, 
                   nemo! Autem ad doloremque esse ut, rerum voluptatem exercitationem aut dolore magnam 
                   porro repellendus, beatae consequuntur magni, 
                  delectus eum inventore provident!</p>       
        <div>
          <ul class="modal-langauges">
            <li>html</li>
            <li>css</li>
            <li>javaScript</li>
          </ul>
     <div class="modal-btns">
       <a class="github-link" href="#">
         See Live <img
         class="btn-icon"
         src="./images/Pop-up/git.png"
         alt="github icon"
       /></a>
       <a class="source-link" href="#">
         See Source <img
         class="btn-icon"
         src="./images/Pop-up/Icon.png"
         alt="github icon"
       /></a>      
   </div>
 </div>
</div>
</div>`;

const workModal = document.createElement('section');
workModal.classList.add('work-modal');

workModal.innerHTML = modalhtml;
document.body.appendChild(workModal);

const modal = document.querySelector('.work-modal');
const close = document.querySelector('.close-button');
const titleElm = document.querySelector('.modal-title');
const canopy = document.querySelector('#sub-canopy');
const subTitle = document.querySelector('.modal .modal-subTitle ul');
const img = document.querySelector('.modal > img');
const paragraph = document.querySelector('.modal-content p');
const languages = document.querySelector('.modal-content .modal-langauges');
const githubLink = document.querySelector('.modal .modal-btns .github-link');
const sourceLink = document.querySelector('.modal .modal-btns .source-link');

document.querySelectorAll('.content button').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.body.className = 'scroll-hide';
    const id = Number(btn.parentNode.parentNode.parentNode.id.split('-')[1]);
    const {
      title,
      image,
      imageAlt,
      detailsHead,
      details,
      bigDescription,
      langs,
      gitLink,
      srcLink,
    } = projects.find((p) => p.id === id);
    titleElm.innerText = title;
    subTitle.innerHTML = details.map((skill) => `<li> <img src="./images/Counter1.png" alt="Counter"> </li> <li class="sub-lang">${skill}</li>`).join('');
    img.setAttribute('src', image);
    img.setAttribute('alt', imageAlt);
    canopy.innerText = detailsHead;
    paragraph.innerText = bigDescription;
    languages.innerHTML = langs.map((l) => `<li>${l}</li>`).join('');
    githubLink.setAttribute('href', gitLink);
    sourceLink.setAttribute('href', srcLink);
    modal.style.display = 'flex';
  });
});
close.addEventListener('click', () => {
  document.body.className = 'scroll-show';
  modal.style.display = 'none';
});

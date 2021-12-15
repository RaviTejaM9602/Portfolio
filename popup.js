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
    technologiesPopup: ['html', 'css', 'javaScript'],
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
    technologiesPopup: ['html', 'css', 'javaScript'],
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
    technologiesPopup: ['html', 'css', 'javaScript'],
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
    technologiesPopup: ['html', 'css', 'javaScript'],
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

// function displayProjectDescriptionPopup(value) {
//   const techData = langs(true, projects[value].technologiesPopup);
//   const projectPopup = document.querySelector('#projectPopup');
//   const popupContentBuilder = `<div class="modal" id="modal">
//                                    <div class="modal-header">
//                                        <div class="modal-title">                                           
//                                                <h3>${projects[value].title}</h3>
//                                                <span class="close-popup">&times;</span>
//                                            </div>
//                                            <div class="canopy">
//                                               <h4>${projects[i].detailsHead}</h4>
//                                                <ul>${projects[i].details.map((skill) => `<li> <img src="./images/Counter1.png" alt="Counter"> </li>  <li class="sub-lang">${skill}</li>`).join('')};
//                                              </ul>
//                                            </div>
//                                        </div>
//                                    </div>
//                                    <div class="popup-body">
//                                        <div class="work-image">
//                                            <img src="${projects[value].popupImageUrlMobile}" class="img-style" alt="${projects[value].name} project screenshot"/>
//                                            <img src="${projects[value].popupImageUrlDesktop}" class="img-style-desktop-popup" alt="${projects[value].name} project screenshot"/>
//                                        </div>
//                                        <div class="description-container">
//                                            <div class="works-description intro-message">
//                                                <p>
//                                                ${projects[value].bigDescription}
//                                                </p>
//                                            </div>
//                                            <div class="project-tags">
//                                                <div class="tags">
//                                                    <ul>
//                                                     ${techData[0]}
//                                                    </ul>
//                                                    <ul>
//                                                     ${techData[1]}
//                                                    </ul>
//                                                </div>
//                                                <div class="tags-buttons">
//                                                    <a href="${projects[value].linkLive}" class="btn-see-project">See live <i class="fa fa-rss"></i></a>
//                                                    <a href="${projects[value].linkSource}" class="btn-see-project">See source <i class="fa fa-github"></i></a>
//                                                </div>
//                                            </div>
//                                        </div>
//                                    </div>
//                                </div>`;
//   projectPopup.innerHTML = popupContentBuilder;
//   projectPopup.style.display = 'block';
//   const closePopup = document.querySelector('.close-popup');
//   closePopup.addEventListener('click', () => {
//     projectPopup.style.display = 'none';
//   });
// }

const seeProjectButtons = document.querySelectorAll('.content button');
console.log('seeProjectButtons.value');
// for (let c = 0; c < seeProjectButtons.length; c += 1) {
//   seeProjectButtons[c].addEventListener('click', () => {
//     displayProjectDescriptionPopup(seeProjectButtons[c].getAttribute('project-index'));
//   });
// }

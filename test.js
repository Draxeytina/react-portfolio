/* eslint-disable no-unused-vars */
function myFunction() {
  // make mobile nav list disappear and appear
  const x = document.getElementById('menu-item');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
  } else {
    x.style.display = 'flex';
  }

  const z = document.getElementById('welcome-top');
  if (z.style.display === 'none') {
    z.style.display = 'flex';
  } else {
    z.style.display = 'none';
  }

  const q = document.getElementById('open-btn');
  if (q.style.display === 'none') {
    q.style.display = 'flex';
  } else {
    q.style.display = 'none';
  }

  const k = document.getElementById('close-btn');
  if (k.style.display === 'flex') {
    k.style.display = 'none';
  } else {
    k.style.display = 'flex';
  }
}

function myFunction2() {
  // add onclick event for close button
  const x = document.getElementById('menu-item');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
  } else {
    x.style.display = 'flex';
  }

  const z = document.getElementById('welcome-top');
  if (z.style.display === 'none') {
    z.style.display = 'flex';
  } else {
    z.style.display = 'none';
  }

  const q = document.getElementById('open-btn');
  if (q.style.display === 'none') {
    q.style.display = 'flex';
  } else {
    q.style.display = 'none';
  }

  const k = document.getElementById('close-btn');
  if (k.style.display === 'flex') {
    k.style.display = 'none';
  } else {
    k.style.display = 'flex';
  }
}

//pop up window

const object = [
  {
    name: 'Very First Project',
    title: 'Multi-Post Stories Gain+Glory 2',
    imgsrc: './images/Snapshoot.png',
    imgMain: './images/Img_placeholder.png',
    technologies: ['css', 'Javascript', 'Ruby on Rails'],
    techMain: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
 },
  {
    name: 'My Second Project',
    title: 'Multi-Post Stories Gain+Glory 2',
    imgsrc: './images/Snapshoot.png',
    imgMain: './images/Img_placeholder.png',
    technologies: ['css', 'Javascript', 'Ruby on Rails'],
    techMain: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    name: 'My Favorite Project',
    title: 'Multi-Post Stories Gain+Glory 3',
    imgsrc: './images/Snapshoot.png',
    imgMain: './images/Img_placeholder.png',
    technologies: ['Bootstraps', 'Javascript', 'React', 'PHP', 'Codepen'],
    techMain: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    name: 'The Hardest Project',
    title: 'Multi-Post Stories Gain+Glory 4',
    imgsrc: './images/Snapshoot.png',
    imgMain: './images/Img_placeholder.png',
    technologies: ['Node.js', 'Javascript', 'Bootstraps'],
    techMain: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    name: 'Milestone Project',
    title: 'Multi-Post Stories Gain+Glory 5',
    imgsrc: './images/Snapshoot.png',
    imgMain: './images/Img_placeholder.png',
    technologies: ['css', 'Javascript', 'html'],
    techMain: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    name: 'Game Project',
    title: 'Multi-Post Stories Gain+Glory 6',
    imgsrc: './images/Snapshoot.png',
    imgMain: './images/Img_placeholder.png',
    technologies: ['css', 'Javascript', 'html'],
    techMain: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
];

const container = document.getElementById('whole-works-section');

const works = document.createElement('div');
works.setAttribute('class', 'desk-works');

for (let i = 0; i < object.length; i += 1) {
  const read = `
  <section class="works-container">
  <img class="image-grey" src="${object[i].imgMain}" alt="works-image">
  <div class="multi">
      <section class="multi-post">
          <h2 class="multi-post-title">${object[i].title}</h2>
          <section class="buttons">
          ${object[i].techMain.map((language) => `<button class="languages">${language}</button>`).join('')}
          </section>
          <button class="see-project" id="${i}">See Project ${i + 1}</button>
       </section>
   </div>
  </section>`;

  works.innerHTML += read;
}

container.appendChild(works);

//code the pop up buttons
const projectBtns = document.querySelectorAll('.see-project');
const body = document.getElementById('body');

const overlay = document.createElement('div');
overlay.setAttribute('class', 'overlay');
overlay.setAttribute('id', 'overlay');

const popup = document.createElement('div');
popup.setAttribute('class', 'pop-up-modal');
overlay.appendChild(popup);

projectBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const btnId = button.id;
    const content = `
        <div class="close-btn-cont">
            <button class="cerrar" id="cerrar">&times</button>
        </div>
        <div class="img-cont-popup">
            <img src="${object[btnId].imgsrc}" alt="." id="img">
        </div>
        
        <div class="popped-window">
            <h2 id="name">${object[btnId].name}</h2>
            <div class="flex-btn">
                <div>
                    <button onclick= "location.href = '${object[btnId].demo}';" class="live">See Live <img src="images/circle.png" alt="See-live-image"></button>
                </div>
                <div>
                    <button onclick= "location.href = '${object[btnId].source}';" class="live">Source <img src="images/cat.png" alt="Source-image"></button>
                </div>
            </div>

        </div>
        <div class="buttons-tech">
          <ul class="ul-container">
          ${object[btnId].technologies.map((language) => `<li class="technologies-buttons">${language}</li>`).join('')}
          </ul>
        </div>
        <div>
            <p class="lorem">${object[btnId].description}</p>
        </div>
        <div class="flex-btn-mob">
            <div>
                <button onclick= "location.href = '${object[btnId].demo}';" class="live-mob">See Live <img src="images/circle.png" alt="See-live"></button>
            </div>
            <div>
                <button onclick= "location.href = '${object[btnId].source}';" class="live-mob">Source <img src="images/cat.png" alt="See-source"></button>
              </div>
          </div>`;

    popup.innerHTML = content;
    overlay.style.display = 'block';
    body.appendChild(overlay);

    // Get the <span> element that closes the modal
    const span = document.getElementById('cerrar');
    // When the user clicks on <span> (x), close the modal
    span.onclick = function closeOnClick() {
      overlay.style.display = 'none';
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function closeOnEvent(event) {
      if (event.target === overlay) {
        overlay.style.display = 'none';
      }
    };
  });
});
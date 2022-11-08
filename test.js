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

// my works object

const object = [
  {
    name: 'Project 1',
    title: 'Live Album Launch',
    imgsrc: './images/project1/Live-desk3.jpeg',
    imgMain: './images/project1/Live-desk1.jpeg',
    technologies: ['CSS3', 'JavaScript'],
    techMain: ['CSS3', 'JavaScript'],
    description:
      'An informative website that uses dynamic HTML to load content. Live Album Launch resembles an informative site that details an event scheduled for a launch of an album.',
    demo: 'https://draxeytina.github.io/Live-Album-Launch/',
    source: 'https://github.com/Draxeytina/Live-Album-Launch',
  },
  {
    name: 'Project 2',
    title: 'Expense Tracker',
    imgsrc: './images/Snapshoot.png',
    imgMain: './images/project2/Expense-desk1.jpeg',
    technologies: ['SASS', 'Javascript'],
    techMain: ['Ruby on rails', 'Ruby', 'Javascript'],
    description:
      'A versatile budget application that allows a user to add expenses to a category and consequentially track expenses per category.',
    demo: 'https://frozen-atoll-99525.herokuapp.com/',
    source: 'https://github.com/Draxeytina/ExpenseTracker',
  },
  {
    name: 'Project 3',
    title: 'DOTA 2',
    imgsrc: './images/Snapshoot.png',
    imgMain: './images/project3/DOTAdesk1.jpeg',
    technologies: ['Webpack', 'SASS', 'API-rest', 'Bootstrap', 'json'],
    techMain: ['JavaScript'],
    description:
      'A SPA that allows the user to see the Pro Players of the Videogame DOTA 2, their information, such as their ID, username, profile, avatar, etc. This is a group project of three developers.',
    demo: 'https://mgmediaweb.github.io/js-group-capstone-project/dist/',
    source: 'https://github.com/mgmediaweb/js-group-capstone-project',
  },
  {
    name: 'Project 4',
    title: 'Todo List',
    imgsrc: './images/Snapshoot.png',
    imgMain: './images/project4/Todo-mob1.jpeg',
    technologies: ['CSS3', 'Local storage', 'Dynamic programing'],
    techMain: ['JavaScript'],
    description:
      'An organisation tool for daily tasks that manipulates data in the local storage. User can edit, delete, clear, mark as done and refresh the list.',
    demo: 'https://draxeytina.github.io/To-do-list/',
    source: 'https://github.com/Draxeytina/To-do-list',
  },
  {
    name: 'Project 5',
    title: 'Covid-19 Data App',
    imgsrc: './images/Snapshoot.png',
    imgMain: './images/project5/Covid-desk1.jpeg',
    technologies: ['CSS3'],
    techMain: ['JavaScript, React, Redux'],
    description:
      'A single paged application featuring COVID-19 live statistics from Dataflowkit API.',
    demo: 'https://62e436ca596db12c1c7f20eb--voluble-trifle-9ddee3.netlify.app/',
    source: 'https://github.com/Draxeytina/Covid-19-data',
  },
  {
    name: 'Project 6',
    title: 'Blog App',
    imgsrc: './images/Snapshoot.png',
    imgMain: './images/project6/Tesla-desk1.jpeg',
    technologies: ['Batchfile', 'CSS3', 'Devise'],
    techMain: ['Ruby', 'JavaScript'],
    description:
      'The Blog app is a typical blog website. It shows the list of posts and empowers readers to interact with them by adding comments and liking posts. Users can also create their own posts',
    demo: '',
    source: 'https://github.com/Draxeytina/Blog',
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
          ${object[i].techMain
    .map((language) => `<button class="languages">${language}</button>`)
    .join('')}
          </section>
          <button class="see-project" id="${i}">See Project ${i + 1}</button>
       </section>
   </div>
  </section>`;

  works.innerHTML += read;
}

container.appendChild(works);

// code the pop up buttons
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
                    <button target="_blank" onclick= "location.href = '${
  object[btnId].demo
}';" class="live">See Live <img src="images/circle.png" alt="See-live-image"></button>
                </div>
                <div>
                    <button target="_blank" onclick= "location.href = '${
  object[btnId].source
}';" class="live">Source <img src="images/cat.png" alt="Source-image"></button>
                </div>
            </div>

        </div>
        <div class="buttons-tech">
          <ul class="ul-container">
          ${object[btnId].technologies
    .map(
      (language) => `<li class="technologies-buttons">${language}</li>`,
    )
    .join('')}
          </ul>
        </div>
        <div>
            <p class="lorem">${object[btnId].description}</p>
        </div>
        <div class="flex-btn-mob">
            <div>
                <button onclick= "location.href = '${
  object[btnId].demo
}';" class="live-mob">See Live <img src="images/circle.png" alt="See-live"></button>
            </div>
            <div>
                <button onclick= "location.href = '${
  object[btnId].source
}';" class="live-mob">Source <img src="images/cat.png" alt="See-source"></button>
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

// validate lowercase on email field
const form = document.getElementById('contact-form-id');
const divError = document.getElementById('div-error');
const errorMsg = document.getElementById('error-msg');
const emailForm = document.getElementById('email-input');

form.addEventListener('submit', (e) => {
  if (emailForm.value.match(/^[a-z@.0-9-_]*$/)) {
    divError.style.display = 'none';
    errorMsg.innerHTML = '';
    emailForm.style.border = '1px solid green';
  } else {
    e.preventDefault();
    emailForm.style.border = '2px solid red';
    divError.style.display = 'flex';
    errorMsg.textContent = '*Email must be in lower case';
  }
});

// Store data in local storage
const username = document.getElementById('full-name-input');
const message = document.querySelector('textarea-input');
const formButton = document.getElementById('formButton');

function storeData() {
  const nameValue = username.value;
  const mailValue = emailForm.value;
  const messageValue = message.value;
  const data = {
    nameValue,
    mailValue,
    messageValue,
  };
  if (nameValue && mailValue && messageValue) {
    const stringedUser = JSON.stringify(data);
    localStorage.setItem('data', stringedUser);
  }
}

formButton.addEventListener('click', storeData);
username.addEventListener('keyup', storeData);
emailForm.addEventListener('keyup', storeData);
message.addEventListener('keyup', storeData);

// Load local storage data onto form
if (localStorage.getItem('data')) {
  const data = JSON.parse(localStorage.getItem('data'));
  username.value = data.nameValue;
  emailForm.value = data.mailValue;
  message.value = data.messageValue;
}

const TEAM = [
  {
    name: 'Maria',
    profission: 'Tutora Ead',
    img: {
      src: '/assets/icons/user-alt-(Regular).svg',
      alt: 'Ícone de usuário',
    },
  },
  {
    name: 'João',
    profission: 'Professor',
    img: {
      src: '/assets/icons/user-alt-(Regular).svg',
      alt: 'Ícone de usuário',
    },
  },
  {
    name: 'Ana',
    profission: 'Assistente',
    img: {
      src: '/assets/icons/user-alt-(Regular).svg',
      alt: 'Ícone de usuário',
    },
  },
  {
    name: 'Cleber',
    profission: 'Assistente',
    img: {
      src: '/assets/icons/user-alt-(Regular).svg',
      alt: 'Ícone de usuário',
    },
  },
];

const team_list = document.getElementById('team_list');

const render_team = () => {
  TEAM.forEach((t) => {
    const wrapper = document.createElement('li');
    wrapper.className = 'col w-100 w-md-50';

    const card = document.createElement('div');
    card.className = 'card p-3 d-flex flex-column align-items-center';

    const img_wrapper = document.createElement('div');
    img_wrapper.className = 'overflow-hidden rounded-circle bg-body-tertiary';

    const img = document.createElement('img');
    img.className = 'd-block img-fluid';
    img.src = t.img.src;
    img.alt = t.img.alt;
    img.width = 125;
    img.height = 125;
    img.loading = 'lazy';

    const title = document.createElement('h3');
    title.className = 'mt-2';
    title.textContent = t.name;

    const profission = document.createElement('p');
    profission.textContent = t.profission;

    img_wrapper.appendChild(img);
    card.appendChild(img_wrapper);
    card.appendChild(title);
    card.appendChild(profission);
    wrapper.appendChild(card);
    team_list?.appendChild(wrapper);
  });
};

render_team();

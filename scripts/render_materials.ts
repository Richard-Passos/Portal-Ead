const MATERIALS = [
  {
    type: {
      id: 'pdf',
      label: 'PDF',
    },
    img: {
      src: '/assets/icons/file-text-(Regular).svg',
      alt: 'A placehoder image',
    },
    title: 'Um Excelente PDF',
  },
  {
    type: {
      id: 'video',
      label: 'Vídeo',
    },
    img: {
      src: '/assets/icons/play-circle-(Regular).svg',
      alt: 'A placehoder image',
    },
    title: 'Um Excelente Vídeo',
  },
  {
    type: {
      id: 'audio',
      label: 'Áudio',
    },
    img: {
      src: '/assets/icons/volume-high-(Regular).svg',
      alt: 'A placehoder image',
    },
    title: 'Um Excelente Áudio',
  },
  {
    type: {
      id: 'pdf',
      label: 'PDF',
    },
    img: {
      src: '/assets/icons/file-text-(Regular).svg',
      alt: 'A placehoder image',
    },
    title: 'Outro Excelente PDF',
  },
  {
    type: {
      id: 'audio',
      label: 'áudio',
    },
    img: {
      src: '/assets/icons/volume-high-(Regular).svg',
      alt: 'A placehoder image',
    },
    title: 'Outro Excelente Áudio',
  },
];

const material_list = document.getElementById('material_list');

const render_materials = () => {
  MATERIALS.forEach((m) => {
    const wrapper = document.createElement('li');
    wrapper.dataset.materialType = m.type.id;
    wrapper.style.minHeight = '250px';

    const card = document.createElement('a');
    card.className =
      'card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 text-decoration-none';
    card.style.backgroundImage = `url('${m.img.src}')`;
    card.href = '#';

    const badge = document.createElement('span');
    badge.className =
      'position-absolute top-0 end-0 badge bg-body-secondary text-body-secondary mt-4 me-5';
    badge.textContent = m.type.label;

    const title = document.createElement('h3');
    title.className =
      'display-6 pt-5 ps-5 pe-5 pb-4 mt-auto text-white lh-1 fw-bold';
    title.textContent = m.title;

    card.appendChild(badge);
    card.appendChild(title);
    wrapper.appendChild(card);
    material_list?.appendChild(wrapper);
  });
};

render_materials();

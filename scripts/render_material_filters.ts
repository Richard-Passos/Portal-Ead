const MATERIAL_FILTERS = [
  {
    id: 'all',
    label: 'Todos',
  },
  {
    id: 'pdf',
    label: 'PDFs',
  },
  {
    id: 'video',
    label: 'Vídeos',
  },
  {
    id: 'audio',
    label: 'Áudios',
  },
];

const material_filters_wrapper = document.getElementById(
  'material_filters_wrapper'
);

const filter_materials = (ev: MouseEvent) => {
  const el = ev.currentTarget as HTMLInputElement;
  const type = el.id;

  const material_filters = document.querySelectorAll<HTMLInputElement>(
    '[name=material-filter]'
  );
  const cards = document.querySelectorAll<HTMLElement>(
    '#materials [data-material-type]'
  );

  material_filters.forEach((filter) => {
    if (filter.id === type) {
      filter.setAttribute('data-active', 'true');
    } else {
      filter.removeAttribute('data-active');
    }
  });

  cards.forEach((card) => {
    if (type === 'all' || card.dataset.materialType === type) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
};

const render_material_filters = () => {
  MATERIAL_FILTERS.forEach((f) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'w-auto';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'material-filter';
    radio.id = f.id;
    radio.className = 'visually-hidden';
    radio.addEventListener('click', filter_materials);

    const label = document.createElement('label');
    label.className = 'btn btn-outline-secondary focus-ring';
    label.htmlFor = f.id;
    label.textContent = f.label;

    wrapper.appendChild(radio);
    wrapper.appendChild(label);
    material_filters_wrapper?.append(wrapper);
  });
};

render_material_filters();

"use strict";
var MATERIAL_FILTERS = [
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
var material_filters_wrapper = document.getElementById('material_filters_wrapper');
var filter_materials = function (ev) {
    var el = ev.currentTarget;
    var type = el.id;
    var material_filters = document.querySelectorAll('[name=material-filter]');
    var cards = document.querySelectorAll('#materials [data-material-type]');
    material_filters.forEach(function (filter) {
        if (filter.id === type) {
            filter.setAttribute('data-active', 'true');
        }
        else {
            filter.removeAttribute('data-active');
        }
    });
    cards.forEach(function (card) {
        if (type === 'all' || card.dataset.materialType === type) {
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';
        }
    });
};
var render_material_filters = function () {
    MATERIAL_FILTERS.forEach(function (f) {
        var wrapper = document.createElement('div');
        wrapper.className = 'w-auto';
        var radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'material-filter';
        radio.id = f.id;
        radio.className = 'visually-hidden';
        radio.addEventListener('click', filter_materials);
        var label = document.createElement('label');
        label.className = 'btn btn-outline-secondary focus-ring';
        label.htmlFor = f.id;
        label.textContent = f.label;
        wrapper.appendChild(radio);
        wrapper.appendChild(label);
        material_filters_wrapper === null || material_filters_wrapper === void 0 ? void 0 : material_filters_wrapper.append(wrapper);
    });
};
render_material_filters();

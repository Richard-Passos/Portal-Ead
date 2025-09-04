"use strict";
var MATERIALS = [
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
var material_list = document.getElementById('material_list');
var render_materials = function () {
    MATERIALS.forEach(function (m) {
        var wrapper = document.createElement('li');
        wrapper.dataset.materialType = m.type.id;
        var card = document.createElement('a');
        card.className =
            'card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 text-decoration-none';
        card.style.backgroundImage = "url('".concat(m.img.src, "')");
        card.href = '#';
        var badge = document.createElement('span');
        badge.className =
            'position-absolute top-0 end-0 badge bg-body-secondary text-body-secondary mt-4 me-5';
        badge.textContent = m.type.label;
        var title = document.createElement('h3');
        title.className =
            'display-6 pt-5 ps-5 pe-5 pb-4 mt-5 text-white lh-1 fw-bold';
        title.textContent = m.title;
        card.appendChild(badge);
        card.appendChild(title);
        wrapper.appendChild(card);
        material_list === null || material_list === void 0 ? void 0 : material_list.appendChild(wrapper);
    });
};
render_materials();

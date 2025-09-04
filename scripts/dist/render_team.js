"use strict";
var TEAM = [
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
var team_list = document.getElementById('team_list');
var render_team = function () {
    TEAM.forEach(function (t) {
        var wrapper = document.createElement('li');
        wrapper.className = 'col w-100 w-md-50';
        var card = document.createElement('div');
        card.className = 'card p-3 d-flex flex-column align-items-center';
        var img_wrapper = document.createElement('div');
        img_wrapper.className = 'overflow-hidden rounded-circle bg-body-tertiary';
        var img = document.createElement('img');
        img.className = 'd-block img-fluid';
        img.src = t.img.src;
        img.alt = t.img.alt;
        img.width = 125;
        img.height = 125;
        img.loading = 'lazy';
        var title = document.createElement('h3');
        title.className = 'mt-2';
        title.textContent = t.name;
        var profission = document.createElement('p');
        profission.textContent = t.profission;
        img_wrapper.appendChild(img);
        card.appendChild(img_wrapper);
        card.appendChild(title);
        card.appendChild(profission);
        wrapper.appendChild(card);
        team_list === null || team_list === void 0 ? void 0 : team_list.appendChild(wrapper);
    });
};
render_team();

'use strict';



const loadbtn = document.querySelector('.load_btn');
    loadbtn.addEventListener('click', () => {
        if (loadbtn === className('active')) {
            loadbtn.classList.add('linksjson');
        } else if (loadbtn === className('linksjson')){
            loadbtn.classList.remove(linksjson);
        }
})

function loadBtn(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} nav`);

    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) { 
                ratio = +e.target.getAttribute('data-ratio');
            } else {
                sex = e.target.getAttribute('id');
            }

            elements.forEach(elem => {
                elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);

            calcALL();
        });
    });
}
    loadBtn('companies', 'linksjsonActive');
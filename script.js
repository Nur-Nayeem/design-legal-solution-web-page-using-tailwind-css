const plusBtns = document.querySelectorAll('.plus-icon')

const menuBtn = document.querySelector('#menu-btn')

const navItems = document.querySelector('.nav-items')

plusBtns.forEach((btn) => {

    btn.addEventListener('click', () => {
        const wrapper = btn.closest('.qn-container');

        const qnDetails = wrapper.querySelector('.qn-details');

        qnDetails.classList.toggle('hidden');

        btn.innerHTML = '';
        const icon = document.createElement('i');
        if (qnDetails.classList.contains('hidden')) {
            icon.classList.add('fa-solid', 'fa-plus');
        } else {
            icon.classList.add('fa-solid', 'fa-minus');
        }
        btn.appendChild(icon);
    });

})

menuBtn.addEventListener('click', () => {
    navItems.classList.toggle('active-nav')
})
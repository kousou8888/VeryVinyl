
const vinylclick = function() {
    const clickElem = document.getElementsByClassName('jacket-pic');
    const blackBg = document.getElementById('js-black-bg');
    for(let i = 0; i < clickElem.length; i++) {
        clickElem[i].onclick = function() {
            console.log(i)
            const vinylBox = document.getElementsByClassName('anather-contents-box');
            const cancelBtn = document.getElementsByClassName('cancel-btn');
            vinylBox[i].classList.add('is-open');
            blackBg.classList.add('is-open');
            document.body.style.overflow = 'hidden';
            vinylBox[i].style.overflowY = 'scroll'
            cancelBtn[i].onclick = function() {
                vinylBox[i].classList.remove('is-open');
                blackBg.classList.remove('is-open');
                document.body.style.overflowY = 'auto';
            };
        };
    };
};
vinylclick();
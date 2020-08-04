document.addEventListener('DOMContentLoaded', function () {

    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('section');

    document.addEventListener('wheel', (event)=> {
        console.log(event.pageY);
    })
})
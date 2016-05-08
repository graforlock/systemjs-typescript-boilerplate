window.addEventListener('click', () => {
   System.import('./app/imp').then(({button}) => {
        console.log(button);
   });
});
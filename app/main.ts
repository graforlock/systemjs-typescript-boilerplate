import $ from 'jquery';

$(window).on('click', () => {
   System.import('rxjs').then(({Observable}) => {
        console.log(Observable);
   });
});
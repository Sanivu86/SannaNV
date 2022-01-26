
console.log('Toimii');

$(document).ready(function()
{
     $('.lahetaNappi').click(function(event)
      {
         event.preventDefault();
         console.log('Nappia painettu');
     })   
})
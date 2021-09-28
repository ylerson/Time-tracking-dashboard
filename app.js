const items = document.querySelectorAll('.item-profile')

let variable;


const current = {
  Work : document.getElementById('h-current'),
  Exercise : document.getElementById('h-current-ex'),
  Play : document.getElementById('h-current-play'),
  'Self Care' : document.getElementById('h-current-care'),
  Study : document.getElementById('h-current-study'),
  Social : document.getElementById('h-current-social')

}
const previous = {
  Work : document.getElementById('h-previous'),
  Exercise : document.getElementById('h-previous-ex'),
  Play : document.getElementById('h-previous-play'),
  'Self Care' : document.getElementById('h-previous-care'),
  Study : document.getElementById('h-previous-study'),
  Social : document.getElementById('h-previous-social')

}

  fetch("data.json")
    .then(response => response.json())
    .then(json => {
      variable = json
     
  });

  for(let i = 0; i < items.length; i++){

    items[i].addEventListener('click', ()=>{
      var current = document.getElementsByClassName("active");

      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      items[i].className += " active";

      window.onhashchange = locationHashChanged;

    })


  }

  function locationHashChanged() {


    const hash = location.hash.split('#')
    const hashFirst = hash[1]

    variable.forEach(e => {
   
        current[e.title].innerText = e.timeframes[hashFirst].current
        previous[e.title].innerText = e.timeframes[hashFirst].previous
       
    });

  }




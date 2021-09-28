const time = document.querySelectorAll('.time');
const items = document.querySelector('.item-profile')
const item = items.children;

let data = 'daily'
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


const container = {
  Work        : 'Work',
  Play        : 'Play',
  Exercise    : 'Exercise',
  'Self Care' : 'Self Care',
  Study       : 'Study',
  Social      : 'Social'

}

  fetch("data.json")
    .then(response => response.json())
    .then(json => {
      variable = json
     
  });

  
time.forEach(t =>{
  t.addEventListener('click', ()=>{
      let hashUrl; 
      window.location.hash = hashUrl
      

      function locationHashChanged() {

        if(location.hash != 'undefined'){


          for(i =0; i < item; i++){

            const hash = location.hash.split('#')
            console.log(hash)
            item[i].classList.add('active');

          }
         

        }
      }
      
      window.onhashchange = locationHashChanged;
      
      // console.log(hashUrl);
      // const hash = hashUrl.split('#')
      // console.log(hash[1])

      data = t.innerText.toLowerCase();

        variable.forEach(e => {
          

          const type = current[e.title];

          if(e.title == container[e.title]){
            
            current[e.title].innerText = e.timeframes[data].current
            previous[e.title].innerText = e.timeframes[data].previous
             
               
              

                // hp.innerText = t.innerText ? d.innerText : e.timeframes[data].previous
           
            }
           
        });
    })
})


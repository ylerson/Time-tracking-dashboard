const time = document.querySelectorAll('.time');
const hCurrentWork = document.getElementById('h-current-work');
const hPreviousWork = document.getElementById('h-previous-work');

let data = 'daily'
let variable;

  fetch("data.json")
    .then(response => response.json())
    .then(json => {
      variable = json
     
  });


time.forEach(t =>{
    t.addEventListener('click', ()=>{
      
      data = t.innerText.toLowerCase();
      console.log(data)
        

        variable.forEach(e => {
        
            if(e.title == 'Work'){
              console.log(e)
              hCurrentWork.innerText = e.timeframes[data].current
              hPreviousWork.innerText = e.timeframes[data].previous
            }
            // console.log(e)
          // hCurrentWork.innerText = e.timeframes[data][0[current]]
        // variable = e;
        });
    })
})


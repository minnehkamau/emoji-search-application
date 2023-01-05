document.addEventListener("DOMContentLoaded",()=>{
 getEmoji();
})

const options = {
	method: 'GET',
	
};
function getEmoji(){
fetch('https://emojihub.yurace.pro/api/all', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}

  
  function showEmoji(data){


  const form = document.getElementById("emojisearch")

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendData();
  });


}
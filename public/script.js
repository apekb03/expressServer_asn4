const search_button=document.getElementById('search_button');
const dogImage=document.getElementById('photo');


// const breedImgName=document.getElementById("box").value; 
search_button.addEventListener('click',(event)=>{
    const breedName=document.getElementById("box").value.trim();
    const myURL=`/image/${breedName}`;

    fetch(myURL)//fetch makes HTTP request to myURL. then the browser sends a request to the backend server at myURL route
    .then(response=>{
        if(!response.ok){
            throw new Error("Breed not found");
        }
        return response.text();
    })
    .then(url=>{
        console.log(url);
        dogImage.src=url;
        dogImage.style.display='block';
    })
    .catch(error=>{
        console.log(error.message);
        alert(error.message);
    });
});

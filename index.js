const express=require('express');
const app=express();

const PORT=3000;
//if you're using this code, all the default GET req will be routed to public.
app.use(express.static('public'));
app.use('/img',express.static('public/img'))


//make an object breeds
const breeds={
    "Golden Retriever": ["ret1.png","ret2.png"],
    "Spitz":["spitz1.png","spitz2.png"],
    "German Shephard":["shep1.png","shep2.png"]
};
//to make selection random
const randInt=n=>Math.floor(n*Math.random());
const getRandomItemFromArray=arr=>arr[randInt(arr.length)]

//name will be whatever we search for
app.get('/breeds',(request,response)=>{
    const listOfBreeds=Object.keys(breeds);
    return response.send(`Here are few breeds: ${listOfBreeds}`);
    
});

//this 'getrandomitem(breeds[name])'//points to an array.
app.get('/image/:breed_name',(request,response)=>{
    var name=request.params.breed_name; //question: should name be a variable? answer: does not matter
    const selected_value=getRandomItemFromArray(breeds[name]);//returns the breed image at random
    //ps.this code point to an array's index, the front end js should convert that array's index into its 
    //source i.e if its an image then convert the string by fetching the source.
    if (selected_value){
        response.send(`/img/${selected_value}`);
    }
    else{
        response.status(404).send('Not found')
    }
});

app.get('*',(req,res)=>{
    res.send('Invalid Page not Found')
})


app.listen(PORT,()=>
    console.log("Server started: http://localhost:"+PORT));
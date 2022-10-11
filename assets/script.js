// fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
//     .then((response) => response.json())
//     .then((data) => console.log(data)) 
let workingObjects = [];
let harvardWorking;
let imageEl = document.getElementById("image");
const harvardKey = "41920f1f-a0a4-40cf-b3fb-3ce184ea6dc1";
const harvardArt = "https://api.harvardartmuseums.org/object"
const harvardPages = 2417;
//there are this many pages at 100 size for harvard fetch

// function saveData(x){
//     harvardWorking = x;
// }

function harvardFetch()
{
    let randomPage = Math.floor(Math.random()*harvardPages)
    fetch('https://api.harvardartmuseums.org/object?&size=100&apikey='+harvardKey+'&page='+randomPage+'')
        .then((response) => response.json())
        .then((data) => harvardWorking = data.records.filter(function(record){return !!record.primaryimageurl}))
        .then(() => renderHarvard())
}




//random number between 0 and 400k
function metFetch()
{
    // let dataPoolStart = Math.floor(Math.random()*400001)
    // let dataPoolEnd = dataPoolStart + 50;

    for(let i = 0; i<=100; i++)
    {    
        let dataPoolStart = Math.floor(Math.random()*400001)
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/'+dataPoolStart)
            .then((response) => response.json())
            .then((data) => workingObjects.push(data)) 
    }
    console.log(workingObjects)
}

harvardFetch()

// const otherImage = imageEl.appendChild('img')
function renderHarvard()
{
    let art = harvardWorking[Math.floor(Math.random()*harvardWorking.length)]

    console.log(art)

    console.log(harvardWorking)
    
    imageEl.src = harvardWorking.records[art].primaryimageurl;

    console.log(imageEl)
    console.log(art)
}
// function fetchMaster()
// {
//     let toggle = Math.floor(Math.random())

//     if(toggle) metFetch();

//     else harvardFetch();

// }



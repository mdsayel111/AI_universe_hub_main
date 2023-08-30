let globalVarObj = {
    fetchData : null
}

let loadAiData = async (url)=>{
    let response = await fetch(url)
    let data = await response.json()
    globalVarObj.fetchData = data.data.tools
}

function displayData(dataArr){
    let aiContainer = document.getElementById("ai-container")
    console
    dataArr.forEach(element => {
        let div = document.createElement("div")
        let features = element.features
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
            <img class="w-full aspect-[2/1] object-cover" src="${element.image ? element.image : 'https://static.thenounproject.com/png/504708-200.png'}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-baseline">
            <h2 class="card-title">Features</h2>
            <p>1. ${features[0]}</p>
            <p>2. ${features[1]}</p>
            <p>3. ${features[2]}</p>
            <h2 class="card-title">${element.name}</h2>
            <div class="relieas flex gap-3 items-center">
                <i class="fa-regular fa-calendar"></i>
                <p class="relies-date">${element.published_in}</p>
            </div>
            </div>
        </div>
        `
        aiContainer.appendChild(div)
    });
}

let fistTimeLoad = async()=>{
    await loadAiData("https://openapi.programming-hero.com/api/ai/tools")
    console.log(globalVarObj.fetchData)
    displayData(globalVarObj.fetchData)
}
fistTimeLoad()
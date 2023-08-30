let globalVarObj = {
    fetchData : null
}

let loadAiData = async (url)=>{
    let response = await fetch(url)
    let data = await response.json()
    return data
}

let onclickHandler = async(id, img)=>{
    await moreData(id)
    decotrateModal(globalVarObj.fetchData,img)
    my_modal_3.showModal()
}

function displayData(dataArr){
    let aiContainer = document.getElementById("ai-container")
    console
    dataArr.forEach(element => {
        let div = document.createElement("div")
        let features = element.features
        let id = element.id
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl" onclick="onclickHandler('${id}', '${element.image ? element.image : 'https://static.thenounproject.com/png/504708-200.png'}')">
            <figure class="px-10 pt-10">
            <img class="w-full aspect-[3/2]" src="${element.image ? element.image : 'https://static.thenounproject.com/png/504708-200.png'}" alt="Shoes" class="rounded-xl" />
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

function decotrateModal(obj,img){
    let modalForm = document.getElementById("modal-form")
    modalForm.innerHTML = `
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <div class="flex p-8 gap-16 items-center">
                <div class="left flex-1">
                <h3 class="text-xl font-bold text-center">${globalVarObj.fetchData.description
                }</h3>
                <div class="subscription flex gap-4 text-center my-4 justify-center">
                    <p class="month-basic text-lime-600">${globalVarObj.fetchData.pricing[0]?.price ? globalVarObj.fetchData.pricing[0]?.price : "no show"} <br> ${globalVarObj.fetchData.pricing[0]?.plan ? globalVarObj.fetchData.pricing[0]?.plan : "no show"
                    }</p>
                    <p class="month-pro text-red-700">${globalVarObj.fetchData.pricing[1]?.price ? globalVarObj.fetchData.pricing[1]?.price : "no show"} <br> ${globalVarObj.fetchData.pricing[1]?.plan ? globalVarObj.fetchData.pricing[1]?.plan : "no show"
                    }</p>
                    <p class="contact-us text-sky-500">
                        Contact<br>us<br>Enterprise
                    </p>
                </div>
                <div class="features-integrations flex justify-between">
                    <div class="features">
                        <h3 class="text-xl font-bold">Features</h1>
                        <p>. ${globalVarObj.fetchData.features['1'].feature_name}</p>
                        <p>. ${globalVarObj.fetchData.features['2'].feature_name}</p>
                        <p>. ${globalVarObj.fetchData.features['3'].feature_name}</p>
                    </div>
                    <div class="integrations">
                        <h3 class=" text-xl font-bold">Integrations</h3>
                        <p>. ${globalVarObj.fetchData.integrations[0]}</p>
                        <p>. ${globalVarObj.fetchData.integrations[1]}</p>
                        <p>. ${globalVarObj.fetchData.integrations[2]}</p>
                    </div>
                </div>
            </div>
            <div class="right flex-1 relative">
                <img src=${img} alt="">
                <h1 class="text-xl font-bold my-3">Hi, how are you doing today?</h1>
                <p>I'm doing well, thank you for asking. How can I <br> assist you today?</p>
                <p class="bg-[#EB5757] rounded-md w-fit px-2 py-1 absolute top-0 right-0">94% accuracy</p>
            </div>
            </div>
        `
    
}

let fistTimeLoad = async()=>{
    var data = await loadAiData("https://openapi.programming-hero.com/api/ai/tools")
    globalVarObj.fetchData = data.data.tools
    displayData(globalVarObj.fetchData)
   
}

let moreData =  async(id)=>{
    let data = await loadAiData(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    globalVarObj.fetchData = data.data
    console.log(globalVarObj.fetchData)
    }
fistTimeLoad()
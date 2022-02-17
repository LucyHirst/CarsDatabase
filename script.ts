"use strict"



class Car{
    // cars.push ({make:(<HTMLInputElement>$("make")!).value,
    // model:(<HTMLInputElement>$("model"))!.value,
    // reg:(<HTMLInputElement>$("reg")!).value,
    // price:(<HTMLInputElement>$("price")!).value,
    // colour:(<HTMLInputElement>$("colour")!).value,
    // mileage:(<HTMLInputElement>$("mileage")!).value})
    make:string=""
    model:string=""
    reg:string=""
    price:number=0
    colour:string=""
    mileage:number=0
}



let cardHolder=document.createElement("div")
cardHolder.classList.add("Holder")
document.body.appendChild(cardHolder)

let cars:Car[]=[]

    let s:string=localStorage.getItem("Cars")!
    if(s!=null){
        cars=JSON.parse(s)
    }
    
  

// cars.push({make:"Make: WayneTech.", model:"Model: Batmobile.", reg:"Regestration: BATMAN.", price: "Price: 10000000000.", colour:"Colour: black.", mileage: "Mileage: 150000000."})
// cars.push({make:"Make: LuthorIndustries.", model:"Model: ScrewYouSuperman.", reg:"Regestration: Ev1L.", price:"Price: 1000000000000.", colour:"Colour: Silver.", mileage:"Mileage: 150000000.",heading:"Available Cars"})
// cars.push({make:"make: WayneTech.",model:"Model: Jokermobile.",reg:"Regestration: WhiS0S3R10us.",price:"Price:BOOM!",colour:"Colour: Green and Mystic Purple.",mileage:"Milage:150000000.",heading:"Available Cars"})

renderCars()

function renderCars(){
    cardHolder.innerHTML=""
    let i=0
    while(i<cars.length){
        let card=document.createElement("div")
        card.className="card"
        cardHolder.appendChild(card)

        let h=document.createElement("h3")
        h.className="h"
        card.appendChild(h)
        h.innerHTML=`${cars[i].make}`

        let hh=document.createElement("h3")
        hh.className="hh"
        card.appendChild(hh)
        hh.innerHTML=`${cars[i].model}`

        let re=document.createElement("h3")
        re.className="re"
        card.appendChild(re)
        re.innerHTML=`${cars[i].reg}`

        let pri=document.createElement("h3")
        pri.className="pri"
        card.appendChild(pri)
        pri.innerHTML=`${cars[i].price}`
        
        let col=document.createElement("h3")
        col.className="col"
        card.appendChild(col)
        col.innerHTML=`${cars[i].colour}`

        let mil=document.createElement("h3")
        mil.className="mil"
        card.appendChild(mil)
        mil.innerHTML=`${cars[i].mileage}`

        let del=document.createElement("button")
        del.className="del"
        card.appendChild(del)
        del.innerHTML="delete Item",
        del.addEventListener("click", function deleteItem() {
            localStorage.removeItem("Cars")
        })
        
   
    
        i++
    }
}




function $(id:string):HTMLElement{
    return document.getElementById(id)!


}

function saveCar(){
    //create car from values in form and add new car to cars
    cars.push ({make:(<HTMLInputElement>$("make")!).value,
    model:(<HTMLInputElement>$("model"))!.value,
    reg:(<HTMLInputElement>$("reg")!).value,
    price:parseInt((<HTMLInputElement>$("price")).value),
    colour:(<HTMLInputElement>$("colour")!).value,
    mileage:parseInt((<HTMLInputElement>$("mileage")!).value)})
    saveCars()
//rerender all cars
    renderCars()
    
}
   
let savebutton = document.getElementById("save")
savebutton!.addEventListener("click",saveCar)

function saveCars(){
    let s = JSON.stringify(cars)
    localStorage.setItem("Cars",s)
}


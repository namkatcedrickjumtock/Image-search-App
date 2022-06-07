import { GetImageModelClass as model } from "./Models.js";


export class ManipulateDomControllerClass extends model {

    // hold return urls


    // get element by ID 
    getELemId = (id) => document.getElementById(id)

    isValidateCorrect = (data) => data !== "" ? true : false

    // appending elements to Dom
    appendingDomElementToDomTree(data) {

    }

    SearchAndDisplayImage(name) {
        this.getListOfImages(name, 30)
        let elem = this.getELemId("col")
        this.holdUrls.map(imgs => {
            let img = document.createElement('img')
            img.setAttribute("src", imgs)
            elem.appendChild(img)
        })
    }

}




window.onload = (event) => {
    let ControllerObject = new ManipulateDomControllerClass()
    let form = ControllerObject.getELemId('form')
    // ControllerObject.searchImage(inputFromUser, 40) 

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let inputFromUser = ControllerObject.getELemId('search').value.trim()
        ControllerObject.isValidateCorrect(inputFromUser) ? ControllerObject.SearchAndDisplayImage(inputFromUser) : alert("Enter a value")
        ControllerObject.getELemId('search').value = " "
    })
}

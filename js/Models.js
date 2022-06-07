// import { ManipulateDomControllerClass as Controller} from "./Controller.js";


export class GetImageModelClass {

    apiKey = "vFF5LxVlOuqle5I8CcL29JGoitMPehAjlL2RP_yak3I"
    holdUrls = []

    // getting images from server
     async getListOfImages(name, num) {

        const API_URL = `https://api.unsplash.com/search/photos?query=${name}&client_id=${this.apiKey}&per_page=${num}&order_by=latest`

        const RESPONSE = await fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`an error occure couldn't get the images${response.status}`)
                } else {
                    response.json()
                        .then((data) =>
                            data.results.map((item) => this.holdUrls.push(item.urls.small))
                        )
                }
            })

            // console.log(this.holdUrls);
    }

}
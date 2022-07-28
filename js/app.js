function get_api(details){                              //requests the api and gets the link if it fails it goes to the failedlink if it succeeds it goes to successlink
axios.request({
url: `https://dog.ceo/api/breeds/image/random`
}).then(successlink).catch(failedlink)
}


function successlink(response) {                        //injects the tages below and goins into response gets the message and displays the string
    document.body.insertAdjacentHTML(`afterend`, `
    <h1>Doggo</h1>
    <section>
    <img src="${response[`data`][`message`]}">
    </section>`)

}

function failedlink (error) {                           // if the funcion fails it will display the h1 tag 
    document.body.insertAdjacentHTML
    (`afterbegin`, `<h1>We have an ERROR!</h1>`)
}












let button_one = document.getElementById(`button_one`);
button_one.addEventListener(`click`, get_api);
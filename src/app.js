import axios
    from "axios";

const list = document.getElementById("country-list");

async function getCountryData() {
    const URI =" https://restcountries.com/";
    const ENDPOINT = "v3.1/all" ;
    try{
        const response = await axios.get(URI + ENDPOINT);
        console.log(response);
        response.data.map((country) => {
            const item = document.createElement('li');
            item.setAttribute('class', 'africa');
            item.textContent = country.data.name;

            // toevoegen aan de list
            list.appendChild( country );
        })

    }
    catch (error) {
        console.error(error);
    }
}

getCountryData();
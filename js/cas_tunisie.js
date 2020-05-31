  let table = document.getElementById('countries_stat')
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "bcc93bfd73msh44b00a724a0e158p14e693jsna9192b86aa01"
    }
})
.then(response => response.json().then( data => {
    console.log(data);
    total_cases.innerHTML = data.total_cases;
    new_cases.innerHTML = data.new_cases;
    new_death.innerHTML = data.new_deaths;
    total_death.innerHTML = data.total_deaths;
    total_recovered.innerHTML = data.total_recovered;

})).catch(err => {
    console.log(err);
});

//Fetching The Case by Country Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
   "method": "GET",
  "headers": {
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "bcc93bfd73msh44b00a724a0e158p14e693jsna9192b86aa01"
    }
})
.then(response => response.json().then(data =>{
    console.log(data)
    let countries_stat = data.countries_stat;
     console.log(countries_stat[108]);

     data =`
        <td>${data.countries_stat[108].cases}</td>
        <td>${data.countries_stat[108].total_recovered}</td>
        <td>${data.countries_stat[108].deaths}</td>


        `

        $("#data").html(data)


}))
.catch(err => {
    console.log(err);
});


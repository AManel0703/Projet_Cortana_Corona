
		init()
		function init(){
			var url = "https://api.covid19api.com/summary"
			var data =''
			$.get(url,function(data){
				console.log(data.Global)

                     
				data =`
				<td>${data.Global.TotalConfirmed}</td>
				<td>${data.Global.TotalDeaths}</td>
				<td>${data.Global.TotalRecovered}</td>


				`

				$("#data").html(data)

			})
		}


	function refreshData(){
			clearData()
			init()
		}
		function clearData(){
			$("#data").empty()
		}
// les pays rechercher 

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
//Getting all the country statistic using a loop
    for(let i = 0; i<countries_stat.length;i++){
        console.log(countries_stat[i]);
        //we will start by inserting the new rows inside our table
        let row = table.insertRow(i+1);
        let country_name = row.insertCell(0);
        let cases = row.insertCell(1);
        let deaths = row.insertCell(2);
        let serious_critical = row.insertCell(3);
        let recovered_per_country = row.insertCell(4);
        let active_cases = row.insertCell(5);
        let new_deaths = row.insertCell(6);
        country_name.innerHTML = countries_stat[i].country_name;
        cases.innerHTML = countries_stat[i].cases;
        deaths.innerHTML = countries_stat[i].deaths;
        serious_critical.innerHTML = countries_stat[i].serious_critical;
        recovered_per_country.innerHTML = countries_stat[i].total_recovered; 
        active_cases.innerHTML = countries_stat[i].active_cases; 
        new_deaths.innerHTML = countries_stat[i].new_deaths;

    }
}))
.catch(err => {
    console.log(err);
});

function showData(){
			var url = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php"
	
			var data =''
			$.get(url,function(data){
				 let row = table.insertRow(i+1);
        let country_name = row.insertCell(0);
        let cases = row.insertCell(1);
        let deaths = row.insertCell(2);
        let serious_critical = row.insertCell(3);
        let recovered_per_country = row.insertCell(4);
        let active_cases = row.insertCell(5);
        let new_deaths = row.insertCell(6);
        country_name.innerHTML = countries_stat[i].country_name;
        cases.innerHTML = countries_stat[i].cases;
        deaths.innerHTML = countries_stat[i].deaths;
        serious_critical.innerHTML = countries_stat[i].serious_critical;
        recovered_per_country.innerHTML = countries_stat[i].total_recovered; 
        active_cases.innerHTML = countries_stat[i].active_cases; 
        new_deaths.innerHTML = countries_stat[i].new_deaths;

			})
			
		}

export default async function fetchWeather () {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.darksky.net/forecast/c71f8a6b4970b5ae6916166dfb43ae14/55.755826,37.6173?lang=ru";
    const res = await fetch(proxyurl+url);
    const data = await res.json();

    let dateToday = new Date();
    let dayOfTheWeek = dateToday.getDay()

    return data.daily.data[dayOfTheWeek+1];
}
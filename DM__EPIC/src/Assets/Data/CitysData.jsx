//citys
const Citys = [
    {id: 1, value: "Moscow", text: "Moscow"},
    {id: 2, value: "Saint Petersburg", text: "Saint Petersburg"},
    {id: 3, value: "Yekaterinburg", text: "Yekaterinburg"},
    {id: 4, value: "Nizhny Novgorod", text: "Nizhny Novgorod"},
    {id: 5, value: "Samara", text: "Samara"},
    {id: 6, value: "Omsk", text: "Omsk"},
    {id: 7, value: "Anapa", text: "Anapa"},
    {id: 8, value: "Chelyabinsk", text: "Chelyabinsk"},
    {id: 9, value: "Donnie Rostov", text: "Donnie Rostov"},
    {id: 10, value: "Ufa", text: "Ufa"},
    {id: 11, value: "Kaluga", text: "Kaluga"},
    {id: 12, value: "Karachayivsk", text: "Karachayivsk"},
    {id: 13, value: "Volgograd", text: "Volgograd"},
    {id: 14, value: "Perm", text: "Perm"},
    {id: 15, value: "Krasnoyarsk", text: "Krasnoyarsk"},
    {id: 16, value: "Vladivostok", text: "Vladivostok"},
    {id: 17, value: "Khabarovsk", text: "Khabarovsk"},
    {id: 18, value: "Krasnodar", text: "Krasnodar"},
    {id: 19, value: "Sochi", text: "Sochi"}, 
    {id: 20, value: "Paris", text: "Paris"},
    {id: 21, value: "Marcel", text: "Marcel"},
    {id: 22, value: "Lyon", text: "Lyon"},
    {id: 23, value: "Toulouse", text: "Toulouse"},
    {id: 24, value: "Nice", text: "Nice"},
    {id: 25, value: "Nantes", text: "Nantes"},
    {id: 26, value: "Strasbourg", text: "Strasbourg"},
    {id: 27, value: "Montpellier", text: "Montpellier"},
    {id: 28, value: "Bordeaux", text: "Bordeaux"},
    {id: 29, value: "Lil", text: "Lil"},
    {id: 30, value: "Hamburg", text: "Hamburg"},
    {id: 31, value: "Bremen", text: "Bremen"},
    {id: 32, value: "Hanover", text: "Hanover"},
    {id: 33, value: "Berlin", text: "Berlin"},
    {id: 34, value: "Dresden", text: "Dresden"},
    {id: 35, value: "Cologne", text: "Cologne"},
    {id: 36, value: "Frankfurt", text: "Frankfurt"},
    {id: 37, value: "Munich", text: "Munich"},
    {id: 38, value: "Stuttgart", text: "Stuttgart"},
    {id: 39, value: "Dusseldorf", text: "Dusseldorf"},
    {id: 40, value: "Dortmund", text: "Dortmund"},
    {id: 41, value: "Essen", text: "Essen"},
    {id: 42, value: "Nuremberg", text: "Nuremberg"},
    {id: 43, value: "Leipzig", text: "Leipzig"},
    {id: 44, value: "Madrid", text: "Madrid"},
    {id: 45, value: "Barcelona", text: "Barcelona"},
    {id: 46, value: "Valencia", text: "Valencia"},
    {id: 47, value: "Seville", text: "Seville"},
    {id: 48, value: "Bilbao", text: "Bilbao"},
    {id: 49, value: "Malaga", text: "Malaga"},
    {id: 50, value: "Oviedo-Gijon", text: "Oviedo-Gijon"},
    {id: 51, value: "Alcante-Elche", text: "Alcante-Elche"},
    {id: 52, value: "Las Palmas", text: "Las Palmas"},
    {id: 53, value: "Zaragoza", text: "Zaragoza"},
    {id: 54, value: "Rome", text: "Rome"},
    {id: 55, value: "Millan", text: "Millan"},
    {id: 56, value: "Palermo", text: "Palermo"},
    {id: 57, value: "Florence", text: "Florence"},
    {id: 58, value: "Venice", text: "Venice"},
    {id: 59, value: "Naples", text: "Naples"},
    {id: 60, value: "Turin", text: "Turin"},
    {id: 61, value: "London", text: "London"},
    {id: 62, value: "Liverpool", text: "Liverpool"},
    {id: 63, value: "Manchestr", text: "Manchestr"},
    {id: 64, value: "Leeds", text: "Leeds"},
    {id: 65, value: "Leicester", text: "Leicester"},
    {id: 66, value: "Blackburn", text: "Blackburn"},
    {id: 67, value: "Athens", text: "Athens"},
    {id: 68, value: "Amsterdam", text: "Amsterdam"},
    {id: 69, value: "Yerevan", text: "Yerevan"},
    {id: 70, value: "Gyumri", text: "Gyumri"},
    {id: 71, value: "Vanadzor", text: "Vanadzor"},
    {id: 72, value: "Ararat", text: "Ararat"},
    {id: 73, value: "Vedi", text: "Vedi"},
    {id: 74, value: "Tsakhkadzor", text: "Tsakhkadzor"},
    {id: 75, value: "Armavir", text: "Armavir"},
    {id: 76, value: "Goris", text: "Goris"},
    {id: 77, value: "Astana", text: "Astana"},
    {id: 78, value: "Ankara", text: "Ankara"},
    {id: 79, value: "Istanbul", text: "Istanbul"},
    {id: 80, value: "Baku", text: "Baku"},
    {id: 81, value: "Belgrade", text: "Belgrade"},
    {id: 82, value: "Budapest", text: "Budapest"},
    {id: 83, value: "Bucharest", text: "Bucharest"},
    {id: 84, value: "Bratislava", text: "Bratislava"},
    {id: 85, value: "Brussels", text: "Brussels"},
    {id: 86, value: "Kiev", text: "Kiev"},
    {id: 87, value: "Donetsk", text: "Donetsk"},
    {id: 88, value: "Zagreb", text: "Zagreb"},
    {id: 89, value: "Tbilisi", text: "Tbilisi"},
    {id: 90, value: "Copenhagen", text: "Copenhagen"},
    {id: 91, value: "Helsinki", text: "Helsinki"},
    {id: 92, value: "Minsk", text: "Minsk"},
    {id: 93, value: "Nicosia", text: "Nicosia"},
    {id: 94, value: "Reykjavik", text: "Reykjavik"},
    {id: 95, value: "Riga", text: "Riga"},
    {id: 96, value: "Sofia", text: "Sofia"},
    {id: 97, value: "Zurich", text: "Zurich"},
    {id: 98, value: "Tehran", text: "Tehran"},
    {id: 99, value: "Tabriz", text: "Tabriz"},
    {id: 100, value: "Shiraz", text: "Shiraz"},
    {id: 101, value: "New Jugha", text: "New Jugha"},
    {id: 102, value: "Al-Riyadh", text: "Al-Riyadh"},
    {id: 103, value: "Mecca", text: "Mecca"},
    {id: 104, value: "Tokyo", text: "Tokyo"},
    {id: 105, value: "Sydney", text: "Sydney"},
    {id: 106, value: "Canberra", text: "Canberra"},
    {id: 107, value: "New Delhi", text: "New Delhi"},
    {id: 108, value: "Mumbai", text: "Mumbai"},
    {id: 109, value: "Beijing", text: "Beijing"},
    {id: 110, value: "Shanghai", text: "Shanghai"},
    {id: 111, value: "Wuhan", text: "Wuhan"},
    {id: 112, value: "Jakarta", text: "Jakarta"},
    {id: 113, value: "Cherry", text: "Cherry"},
    {id: 114, value: "Doha", text: "Doha"},
    {id: 115, value: "Dubai", text: "Dubai"},
    {id: 116, value: "Cairo", text: "Cairo"},
    {id: 117, value: "Brazil", text: "Brazil"},
    {id: 118, value: "Rio de Janeiro", text: "Rio de Janeiro"},
    {id: 119, value: "Sao Paulo", text: "Sao Paulo"},
    {id: 120, value: "Buenos Aires", text: "Buenos Aires"},
    {id: 121, value: "Montevideo", text: "Montevideo"},
    {id: 122, value: "Santiago", text: "Santiago"},
    {id: 123, value: "Ottawa", text: "Ottawa"},
    {id: 124, value: "Toronto", text: "Toronto"},
    {id: 125, value: "Mexico City", text: "Mexico City"},
    {id: 126, value: "Washington", text: "Washington"},
    {id: 127, value: "Los Angeles", text: "Los Angeles"},
    {id: 128, value: "New York", text: "New York"},
    {id: 129, value: "Chicago", text: "Chicago"},
    {id: 130, value: "San Francisco", text: "San Francisco"}
];

export default Citys;
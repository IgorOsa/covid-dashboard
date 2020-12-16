/* eslint-disable */
import React, { Component } from 'react';
import Stats from './components/Stats';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
  async componentDidMount() {
    // сюда передаём страну для таймлайна
    const country = 'China';

    const stats = new Stats();
    const statsByCountry = new Stats(country);

    const covidTotalStats = await stats.getTotalStats();

    // сюда передаём название выбранной пользователем страны
    const inputValue = 'Afghanistan';
    const covidPerCountriesStats = await stats.getPerCountryStats(inputValue);

    // общая статистика по миру за всё время
    const covidWorldTimeline = await stats.getWorldTimeline();
    // статистика по конкретной стране за всё время
    const covidCountryTimeline = await statsByCountry.getCountryTimeline();
    // статистика по всем странам за всё время, аргументом передается конкретная страна
    const covidTotalTimeline = await stats.getTotalTimeline(inputValue);

    // Дата последнего обновления данных:
    console.log(`Last update: ${covidTotalStats.updated}`);
    // ~~~~~~~~ данные по всему миру на текущий день ~~~~~~~~~~~
    // в абсолютных величинах :
    // console.log(`Total cases: ${covidTotalStats.cases}`);
    // console.log(`Total deaths: ${covidTotalStats.deaths}`);
    // console.log(`Total recovered: ${covidTotalStats.recovered}`);
    // в относительных (на 100 000):
    // console.log(`Total cases Per One Hundred Thousand: ${covidTotalStats.casesPerOneHundredThousand}`);
    // console.log(`Total deaths Per One Hundred Thousand: ${covidTotalStats.deathsPerOneHundredThousand}`);
    // console.log(`Total recovered Per One Hundred Thousand: ${covidTotalStats.recoveredPerOneHundredThousand}`);

    // ~~~~~~~~ данные по всему миру за последний день ~~~~~~~~~~~
    // в абсолютных величинах :
    // console.log(`Total cases today: ${covidTotalStats.todayCases}`);
    // console.log(`Total deaths today: ${covidTotalStats.todayDeaths}`);
    // console.log(`Total recovered today: ${covidTotalStats.todayRecovered}`);
    // в относительных (на 100 000):
    // console.log(`Total cases Per One Hundred Thousand today: ${covidTotalStats.todayCasesPerOneHundredThousand}`);
    // console.log(`Total deaths Per One Hundred Thousand today: ${covidTotalStats.todayDeathsPerOneHundredThousand}`);
    // console.log(`Total recovered Per One Hundred Thousand today: ${covidTotalStats.todayRecoveredPerOneHundredThousand}`);

    // ~~~~~~~~ данные по СТРАНАМ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    // список всех стран
    // console.log(covidPerCountriesStats.countries);
    // название запрашиваемой страны
    // console.log(covidPerCountriesStats.countryName);
    // флаг конкретной страны:
    // console.log(covidPerCountriesStats.flag);
    // ~~~~~~~~ данные по конкретной стране на текущий день ~~~~~~~~~~~
    // в абсолютных величинах :
    // console.log(`cases: ${covidPerCountriesStats.cases}`);
    // console.log(`deaths: ${covidPerCountriesStats.deaths}`);
    // console.log(`recovered: ${covidPerCountriesStats.recovered}`);
    // в относительных (на 100 000):
    // console.log(`cases Per One Hundred Thousand: ${covidPerCountriesStats.casesPerOneHundredThousand}`);
    // console.log(`deaths Per One Hundred Thousand: ${covidPerCountriesStats.deathsPerOneHundredThousand}`);
    // console.log(`recovered Per One Hundred Thousand: ${covidPerCountriesStats.recoveredPerOneHundredThousand}`);

    // ~~~~~~~~ данные по конкретной стране за последний день ~~~~~~~~~~~
    // в абсолютных величинах :
    // console.log(`cases today: ${covidPerCountriesStats.todayCases}`);
    // console.log(`deaths today: ${covidPerCountriesStats.todayDeaths}`);
    // console.log(`recovered today: ${covidPerCountriesStats.todayRecovered}`);
    // в относительных (на 100 000):
    // console.log(`cases Per One Hundred Thousand today: ${covidPerCountriesStats.todayCasesPerOneHundredThousand}`);
    // console.log(`deaths Per One Hundred Thousand today: ${covidPerCountriesStats.todayDeathsPerOneHundredThousand}`);
    // console.log(`recovered Per One Hundred Thousand today: ${covidPerCountriesStats.todayRecoveredPerOneHundredThousand}`);

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~TIMELINES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // +++========+++ общая статистика по миру за всё время +++========+++
    // console.log('cases: ', covidWorldTimeline.cases);
    // console.log('deaths: ', covidWorldTimeline.deaths);
    // console.log('recovered: ', covidWorldTimeline.recovered);
    // +++========+++ статистика по конкретной стране за всё время +++========+++
    // console.log('country name: ', covidCountryTimeline.countryName)
    // console.log('cases: ', covidCountryTimeline.cases);
    // console.log('deaths: ', covidCountryTimeline.deaths);
    // console.log('recovered: ', covidCountryTimeline.recovered);
    // +++========+++ статистика по всем странам за всё время +++========+++
    // тут в список "стран" попадает вообще всё из апи - корабли, лайнеры, какие-то случайные объекты
    // console.log('countries: ', covidTotalTimeline.countries)
    // console.log('country name: ', covidTotalTimeline.countryName);
    // console.log('cases: ', covidTotalTimeline.cases);
    // console.log('deaths: ', covidTotalTimeline.deaths);
    // console.log('recovered: ', covidTotalTimeline.recovered);
    // console.log('full data for one country: ', covidTotalTimeline.fullDataForCountry );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

// function App() {
//   const stats = new Stats();
//   const covidPerCountriesStats = stats.getPerCountryStats(true);
//   const covidTotalStats = stats.getTotalStats(false);
//   console.log(covidPerCountriesStats);
//   console.log(covidTotalStats);
//   return (
//     <div className="App">
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// }

export default App;

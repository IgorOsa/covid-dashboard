/* eslint-disable */
import React, { useState } from 'react';
import StatusToggles from '../../StatusToggles'
import FullScreenToggle from '../../FullScreenToggle'
import './countriesList.scss';

const RegionStatistic = ({ totalData, perCountryData, setStatusToggle, statusToggle, statusTogglePopulation, setStatusTogglePopulation, setChosenCountry }) => {
  const casesPer100k = () => totalData.casesPerOneMillion / 10
  const displayCases = () => !statusToggle ? totalData.cases : totalData.todayCases
  const [isFullScreen, setIsFullScreen] = useState('')
  const [isItemActive, setItemActive] = useState(-1)
  const [isWorldItem, setWorldItem] = useState('active')
  perCountryData.sort((a, b) => b.cases - a.cases)
  perCountryData.map((it, i, arr) => {
    it['active'] = ''
    if (isItemActive >= 0) return arr[isItemActive]['active'] = 'active'
  })
  return (
    <div className={`${isFullScreen} countries`}>
      <FullScreenToggle
        setIsFullScreen={setIsFullScreen}
      />
      <h4 className="countries__title">All stats by country</h4>
      <input className="country-search" type="text" placeholder="country..." />
      <ul className="countries__list">
          <li className={`${isWorldItem} countries__item`} onClick={() => {
            setChosenCountry('Global')
            setItemActive(-1)
            setWorldItem('active')
          }}>
            <span className="item__value">{ !statusTogglePopulation ? displayCases() : casesPer100k() }</span>
            <span className="item__name">World Cases</span>
            <span className="item__planet">🌏</span>
          </li>
        {perCountryData.map((it, i) => (
          <li className={`${it.active} countries__item`} onClick={() => {
            setChosenCountry(it.country)
            setItemActive(i)
            setWorldItem('')
          }}>
            <span className="item__value">{!statusToggle ? it.cases : it.todayCases }</span>
            <span className="item__name">{it.country}</span>
            <img src={it.countryInfo.flag} width="25" className="item__flag" />
          </li>
        ))}
      </ul>
      <StatusToggles
        setStatusToggle={setStatusToggle}
        statusToggle={statusToggle}
        statusTogglePopulation={statusTogglePopulation}
        setStatusTogglePopulation={setStatusTogglePopulation}
      />
    </div>
  );
};

export default RegionStatistic;

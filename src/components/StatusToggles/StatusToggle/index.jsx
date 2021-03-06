/* eslint-disable no-sequences */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
import React from 'react';
import './index.scss';

const StatusToggle = ({
  setStatusToggle,
  statusToggle,
  className,
  statusFirst,
  statusSecond,
  statusTogglePopulation,
  setStatusTogglePopulation,
}) => {
  const onChangeToggle = () => {
    if (typeof statusToggle !== 'undefined') setStatusToggle((prev) => !prev);
    if (typeof setStatusTogglePopulation !== 'undefined') setStatusTogglePopulation((prev) => !prev);
  };
  const statusToggleFirst = () => {
    if (typeof statusToggle !== 'undefined') return !statusToggle ? 'active' : 'not';
    if (typeof statusTogglePopulation !== 'undefined') return !statusTogglePopulation ? 'active' : 'not';
  };
  const statusToggleSecond = () => {
    if (typeof statusToggle !== 'undefined') return statusToggle ? 'active' : 'not';
    if (typeof statusTogglePopulation !== 'undefined') return statusTogglePopulation ? 'active' : 'not';
  };

  const checkboxHandler = () => '';

  return (
    <div className={className, 'status-toggle'}>
      <button className={statusToggleFirst()} type="button" onClick={onChangeToggle}>
        {statusFirst}
      </button>
      <label className="switch">
        <input
          type="checkbox"
          checked={statusToggle || statusTogglePopulation}
          onClick={onChangeToggle}
          onChange={checkboxHandler}
        />
        <span className="slider round" />
      </label>
      <button className={statusToggleSecond()} type="button" onClick={onChangeToggle}>
        {statusSecond}
      </button>
    </div>
  );
};

export default StatusToggle;

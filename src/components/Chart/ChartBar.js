import React,{useEffect, useState} from 'react';

import './ChartBar.css';

const ChartBar = (props) => {

  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    console.log('barFillHeight', barFillHeight)
  }
  const margin = 1000 - props.value;


  return (
    <div className='chart-bar'>
       <div className='chart-bar__label'>Total: {props.maxValue}<br /><span className={`margin_amount ${margin > 0 ? "available_margin" : "notAvailable_margin"}`}>{margin}</span></div>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;

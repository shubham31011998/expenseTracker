import React,{useEffect, useState} from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  const [perMonthSpent, setPerMonthSpent] = useState(0);
  let barFillHeight = '0%';
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  useEffect(() => {
    if(props.value){
      let amount = props.value ;
      // setPerMonthSpent(amount);
    }
  }, [barFillHeight])
  



  return (
    <div className='chart-bar'>
       <div className='chart-bar__label'>Total: {props.maxValue}<br /><span className='margin_amount'>{perMonthSpent}</span></div>
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

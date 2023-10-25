import React from 'react'
import styles from './Select.module.css';
const select = ({ name, data, value, selected }) => {
   const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    selected(selectedValue);
  };
  return (
    <div className={styles['select-btn']}>
      <label className={styles.select} htmlFor="select">{name} by:</label>
      <select name="select" id="select" value={value} onChange={handleSelectChange}>
        <option value="default">Default</option>
        {
          data.length > 0 ?
            (data.map((item, index) => {
              return (<option key={index} value={item}>{item}</option>)
            }))
            : (<></>)
        }
      </select>
    </div>
  )
}
export default select;
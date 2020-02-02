import React from 'react';
import 'antd/dist/antd.css';
import { Switch } from 'antd';

const Switcher = () => {
    const onChange = (checked)  =>{
        console.log(`switch to ${checked}`);
      }
    return (
        <>
            <Switch defaultChecked onChange={onChange} />
        </>
    )
}

export default Switcher;
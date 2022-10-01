import {Row, Segmented, Space } from 'antd';
import { useState } from 'react';
import '../css/AutoFrontend.css';
import FreeTemplates from './Autofront/FreeTemplates';
import TemplateBuilder from './Autofront/TemplateBuilder';



const AutoFrontend = () => {
    const [offerValue, setOfferValue] = useState('Ready-to-Use')
    return (
        <>
            <Row justify='space-around' align='middle' style={{marginTop:'1%'}}>
                <Space>
                    <Segmented style={{color:'gray', fontWeight:'bold', backgroundColor:'#bae7ff'}} options={['Ready-to-Use', 'Template Builder', 'Front Builder']} defaultValue="Ready-to-Use" value={offerValue} onChange={setOfferValue} />
                </Space>
            </Row>

            { (offerValue==="Ready-to-Use") &&
                <FreeTemplates/>
            }
            { (offerValue==="Template Builder") &&
                <TemplateBuilder/>
            }




        </>

    );
};
  
export default AutoFrontend;
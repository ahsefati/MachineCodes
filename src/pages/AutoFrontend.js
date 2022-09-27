import {Col, Row, Typography, Segmented, Space, Divider, Card, Tooltip } from 'antd';
import { EyeOutlined, HeartFilled, DownloadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import '../css/AutoFrontend.css';
import FreeTemplates from './Autofront/FreeTemplates';
import TemplateBuilder from './Autofront/TemplateBuilder';

const {Title, Text} = Typography
const {Meta} = Card


const AutoFrontend = () => {
    const [offerValue, setOfferValue] = useState('Ready-to-Use')
    return (
        <>
            <Row justify='space-around' align='middle' style={{marginTop:'1%'}}>
                <Space>
                    <Segmented style={{color:'gray', fontWeight:'bold', backgroundColor:'#bae7ff'}} options={['Ready-to-Use', 'Template Builder', 'Front Builder']} defaultValue="Ready-to-Use" value={offerValue} onChange={setOfferValue} />
                </Space>
            </Row>

            { (offerValue=="Ready-to-Use") &&
                <FreeTemplates/>
            }
            { (offerValue=="Template Builder") &&
                <TemplateBuilder/>
            }




        </>

    );
};
  
export default AutoFrontend;
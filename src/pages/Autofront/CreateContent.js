import { Col, Layout, Menu, Typography, Row, Divider, Switch, Card, Upload, Image, Radio } from 'antd';
import ImgCrop from 'antd-img-crop';
import React, {useState, useEffect } from 'react';
const { Header, Content } = Layout;
const {Text} = Typography

const CreateContent = (params) => {
    

    return (
        <>
            {params.currentGeneralStep==1 &&
                <Row justify='center' style={{fontSize:'2em', textAlign:'center', marginTop:'20%'}}>
                    <Text>Page Content Will be here in the next step!</Text>
                </Row>
            }
        </>
    )
}


export default CreateContent;
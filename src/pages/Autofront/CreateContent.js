import { Col, Layout, Menu, Typography, Row, Divider, Switch, Card, Upload, Image, Radio } from 'antd';
import ImgCrop from 'antd-img-crop';
import React, {useState, useEffect } from 'react';
const { Header, Content } = Layout;
const {Text} = Typography

const CreateContent = (params) => {
    

    return (
        <>
            {params.currentGeneralStep===1 &&
                <Row justify='center' style={{fontSize:'2em', textAlign:'center', marginTop:'20%'}}>
                    <Text>Page Content Will be here in the next step!</Text>
                </Row>
            }
            {params.currentGeneralStep===2 &&
                <Content style={{maxHeight:'500px', overflowY:'auto'}}>
                    <Row style={{backgroundColor:'gray'}}>
                        <Col style={{backgroundColor:'red'}} span={12}>
                            Hello
                        </Col>
                        <Col style={{backgroundColor:'green'}} span={12}>
                            Hii
                        </Col>
                    </Row>
                </Content>
            }
        </>
    )
}


export default CreateContent;
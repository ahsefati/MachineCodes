import {Row, Typography, Col, Card } from 'antd';

const {Text} = Typography

const AutoMobile = () => {
    return (
        <Row justify='center' style={{marginBottom:'28%', marginTop:'10%'}}>
            <Col>
                <Card bordered={false}>
                    <Text style={{fontSize:'36px'}}>We are Sorry...😢</Text>
                    <br/>
                    <Text style={{fontSize:'18px'}} type='secondary'> This Feature is not implemented yet! It will be accesible by April 2024 if I get time to complete it! 🫠</Text>
                </Card>
            </Col>
        </Row>
    );
};
  
export default AutoMobile;
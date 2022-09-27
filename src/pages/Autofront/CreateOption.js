import {Col, Card, Skeleton } from 'antd';
import { useState, useEffect, useRef, forwardRef } from 'react';
import '../../css/AutoFrontend.css';

const {Meta} = Card

const CreateOption = forwardRef((params, ref) => {
    const [isCardloading, setIsCardloading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setIsCardloading(false)
        }, 1000);
    },[])

    return (
        <>
            
            <Col xs={23} sm={23} md={23} lg={11} xl={11} xxl={11}>
                <Card id={params.id} loading={isCardloading} className='featuresCard' ref={ref} onClick={params.setSelectedCard}
                    cover={
                            isCardloading ? <div style={{textAlign:'center'}}><Skeleton.Image  active/></div> :
                                <img
                                    alt={params.alt}
                                    src={params.src}
                                    style={{padding:'10px'}}
                                />
                        
                    }
                    
                >
                    <Meta title={params.title}/>
                    
                </Card>
            </Col>

        </>

    );
});
  
export default CreateOption;
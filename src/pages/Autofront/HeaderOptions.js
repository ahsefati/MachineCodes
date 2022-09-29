import {Row, Typography, Card } from 'antd';
import { useState, useEffect, useRef } from 'react';
import '../../css/AutoFrontend.css';
import CreateOption from './CreateOption';



import header01_01 from '../../assets/AutoFront/TemplateBuilder/Headers/01_01.png'
import header01_02 from '../../assets/AutoFront/TemplateBuilder/Headers/01_02.png'
import header01_03 from '../../assets/AutoFront/TemplateBuilder/Headers/01_03.png'
import header01_04 from '../../assets/AutoFront/TemplateBuilder/Headers/01_04.png'

import header02_01 from '../../assets/AutoFront/TemplateBuilder/Headers/02_01.png'
import header02_02 from '../../assets/AutoFront/TemplateBuilder/Headers/02_02.png'
import header02_03 from '../../assets/AutoFront/TemplateBuilder/Headers/02_03.png'

import header03_01 from '../../assets/AutoFront/TemplateBuilder/Headers/03_01.png'
import header03_02 from '../../assets/AutoFront/TemplateBuilder/Headers/03_02.png'
import header03_03 from '../../assets/AutoFront/TemplateBuilder/Headers/03_03.png'

import header04_01 from '../../assets/AutoFront/TemplateBuilder/Headers/04_01.png'
import header04_02 from '../../assets/AutoFront/TemplateBuilder/Headers/04_02.png'
import header04_03 from '../../assets/AutoFront/TemplateBuilder/Headers/04_03.png'

import header05_01 from '../../assets/AutoFront/TemplateBuilder/Headers/05_01.png'
import header05_02 from '../../assets/AutoFront/TemplateBuilder/Headers/05_02.png'
import header05_03 from '../../assets/AutoFront/TemplateBuilder/Headers/05_03.png'

import header06_01 from '../../assets/AutoFront/TemplateBuilder/Headers/06_01.png'
import header06_02 from '../../assets/AutoFront/TemplateBuilder/Headers/06_02.png'
import header06_03 from '../../assets/AutoFront/TemplateBuilder/Headers/06_03.png'
import header06_04 from '../../assets/AutoFront/TemplateBuilder/Headers/06_04.png'
import header06_05 from '../../assets/AutoFront/TemplateBuilder/Headers/06_05.png'



const HeaderOptions =  (params) => {


    const _header01_01 = useRef(null)
    const _header01_02 = useRef(null)
    const _header01_03 = useRef(null)
    const _header01_04 = useRef(null)

    const _header02_01 = useRef(null)
    const _header02_02 = useRef(null)
    const _header02_03 = useRef(null)

    const _header03_01 = useRef(null)
    const _header03_02 = useRef(null)
    const _header03_03 = useRef(null)
    
    const _header04_01 = useRef(null)
    const _header04_02 = useRef(null)
    const _header04_03 = useRef(null)

    const _header05_01 = useRef(null)
    const _header05_02 = useRef(null)
    const _header05_03 = useRef(null)

    const _header06_01 = useRef(null)
    const _header06_02 = useRef(null)
    const _header06_03 = useRef(null)
    const _header06_04 = useRef(null)
    const _header06_05 = useRef(null)

    const headersList1 = [_header01_01,_header01_02,_header01_03,_header01_04]
    const headersList2 = [_header02_01,_header02_02,_header02_03]
    const headersList3 = [_header03_01,_header03_02,_header03_03]
    const headersList4 = [_header04_01,_header04_02,_header04_03]
    const headersList5 = [_header05_01,_header05_02,_header05_03]

    const setSelectedHeaderCard = (e) => {
        if (params.selectedLayoutOption === '01') headersList1.forEach((header_)=>{header_.current.classList.remove('featuresCard-Selected')})
        if (params.selectedLayoutOption === '02') headersList2.forEach((header_)=>{header_.current.classList.remove('featuresCard-Selected')})
        if (params.selectedLayoutOption === '03') headersList3.forEach((header_)=>{header_.current.classList.remove('featuresCard-Selected')})
        if (params.selectedLayoutOption === '04') headersList4.forEach((header_)=>{header_.current.classList.remove('featuresCard-Selected')})
        if (params.selectedLayoutOption === '05') headersList5.forEach((header_)=>{header_.current.classList.remove('featuresCard-Selected')})

        e.currentTarget.classList.toggle('featuresCard-Selected')
        params.setSelectedHeaderOption(e.currentTarget.id)
    }

    return (
        <>
            
            <Row justify='center' gutter={[48,36]} style={{marginBottom:'5%'}}>
                { params.selectedLayoutOption === '01' &&
                    <>
                        <CreateOption id={'01'} ref={_header01_01} setSelectedCard={setSelectedHeaderCard} alt={"Header 1 - MachineCodes - React AI"} src={header01_01} title={'Header 1'}/>
                        <CreateOption id={'02'} ref={_header01_02} setSelectedCard={setSelectedHeaderCard} alt={"Header 2 - MachineCodes - React AI"} src={header01_02} title={'Header 2'}/>
                        <CreateOption id={'03'} ref={_header01_03} setSelectedCard={setSelectedHeaderCard} alt={"Header 3 - MachineCodes - React AI"} src={header01_03} title={'Header 3'}/>
                        <CreateOption id={'04'} ref={_header01_04} setSelectedCard={setSelectedHeaderCard} alt={"Header 4 - MachineCodes - React AI"} src={header01_04} title={'Header 4'}/>
                    </>
                }
                { params.selectedLayoutOption === '02' &&
                    <>
                        <CreateOption id={'05'} ref={_header02_01} setSelectedCard={setSelectedHeaderCard} alt={"Header 1 - MachineCodes - React AI"} src={header02_01} title={'Header 1'}/>
                        <CreateOption id={'06'} ref={_header02_02} setSelectedCard={setSelectedHeaderCard} alt={"Header 2 - MachineCodes - React AI"} src={header02_02} title={'Header 2'}/>
                        <CreateOption id={'07'} ref={_header02_03} setSelectedCard={setSelectedHeaderCard} alt={"Header 3 - MachineCodes - React AI"} src={header02_03} title={'Header 3'}/>                        
                    </>
                }
                { params.selectedLayoutOption === '03' &&
                    <>
                        <CreateOption id={'08'} ref={_header03_01} setSelectedCard={setSelectedHeaderCard} alt={"Header 1 - MachineCodes - React AI"} src={header03_01} title={'Header 1'}/>
                        <CreateOption id={'09'} ref={_header03_02} setSelectedCard={setSelectedHeaderCard} alt={"Header 2 - MachineCodes - React AI"} src={header03_02} title={'Header 2'}/>
                        <CreateOption id={'10'} ref={_header03_03} setSelectedCard={setSelectedHeaderCard} alt={"Header 3 - MachineCodes - React AI"} src={header03_03} title={'Header 3'}/>                        
                    </>
                }
                { params.selectedLayoutOption === '04' &&
                    <>
                        <CreateOption id={'10'} ref={_header04_01} setSelectedCard={setSelectedHeaderCard} alt={"Header 1 - MachineCodes - React AI"} src={header04_01} title={'Header 1'}/>
                        <CreateOption id={'11'} ref={_header04_02} setSelectedCard={setSelectedHeaderCard} alt={"Header 2 - MachineCodes - React AI"} src={header04_02} title={'Header 2'}/>
                        <CreateOption id={'12'} ref={_header04_03} setSelectedCard={setSelectedHeaderCard} alt={"Header 3 - MachineCodes - React AI"} src={header04_03} title={'Header 3'}/>                        
                    </>
                }
                { params.selectedLayoutOption === '05' &&
                    <>
                        <CreateOption id={'13'} ref={_header05_01} setSelectedCard={setSelectedHeaderCard} alt={"Header 1 - MachineCodes - React AI"} src={header05_01} title={'Header 1'}/>
                        <CreateOption id={'14'} ref={_header05_02} setSelectedCard={setSelectedHeaderCard} alt={"Header 2 - MachineCodes - React AI"} src={header05_02} title={'Header 2'}/>
                        <CreateOption id={'15'} ref={_header05_03} setSelectedCard={setSelectedHeaderCard} alt={"Header 3 - MachineCodes - React AI"} src={header05_03} title={'Header 3'}/>                        
                    </>
                }
                { params.selectedLayoutOption === '06' &&
                    <>
                        <CreateOption id={'16'} ref={_header06_01} setSelectedCard={setSelectedHeaderCard} alt={"Header 1 - MachineCodes - React AI"} src={header06_01} title={'Header 1'}/>
                        <CreateOption id={'17'} ref={_header06_02} setSelectedCard={setSelectedHeaderCard} alt={"Header 2 - MachineCodes - React AI"} src={header06_02} title={'Header 2'}/>
                        <CreateOption id={'18'} ref={_header06_03} setSelectedCard={setSelectedHeaderCard} alt={"Header 3 - MachineCodes - React AI"} src={header06_03} title={'Header 3'}/>                        
                        <CreateOption id={'19'} ref={_header06_04} setSelectedCard={setSelectedHeaderCard} alt={"Header 4 - MachineCodes - React AI"} src={header06_04} title={'Header 4'}/>                        
                        <CreateOption id={'20'} ref={_header06_05} setSelectedCard={setSelectedHeaderCard} alt={"Header 5 - MachineCodes - React AI"} src={header06_05} title={'Header 5'}/>                        
                    </>
                }
                
            </Row>

        </>

    );
};
  
export default HeaderOptions;
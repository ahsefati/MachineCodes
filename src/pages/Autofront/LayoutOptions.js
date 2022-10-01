import {Row, Typography} from 'antd';
import { useRef } from 'react';
import '../../css/AutoFrontend.css';

import CreateOption from './CreateOption';

import layout01 from '../../assets/AutoFront/TemplateBuilder/Layouts/01.png'
import layout02 from '../../assets/AutoFront/TemplateBuilder/Layouts/02.png'
import layout03 from '../../assets/AutoFront/TemplateBuilder/Layouts/03.png'
import layout04 from '../../assets/AutoFront/TemplateBuilder/Layouts/04.png'


const {Title} = Typography



const LayoutOptions = (params) => {


    const _layout01 = useRef(null)
    const _layout02 = useRef(null)
    const _layout03 = useRef(null)
    const _layout04 = useRef(null)
    const layoutsList = [_layout01, _layout02, _layout03, _layout04,]

    const setSelectedLayoutCard = (e) => {
        layoutsList.forEach((layout_)=>{layout_.current.classList.remove('featuresCard-Selected')})
        e.currentTarget.classList.toggle('featuresCard-Selected')
        params.setSelectedLayoutOption(e.currentTarget.id)
    }

    return (
        <>
            <Title level={4}>Which one describes your desired general layout?</Title>
            <Row justify='center' gutter={[48,36]} style={{marginBottom:'5%'}}>
        
                <CreateOption id={'01'} ref={_layout01} setSelectedCard={setSelectedLayoutCard} alt={"Layout 1 - MachineCodes - React AI"} src={layout01} title={'Layout 1'}/>                        
                <CreateOption id={'02'} ref={_layout02} setSelectedCard={setSelectedLayoutCard} alt={"Layout 2 - MachineCodes - React AI"} src={layout02} title={'Layout 2'}/>                        
                <CreateOption id={'03'} ref={_layout03} setSelectedCard={setSelectedLayoutCard} alt={"Layout 5 - MachineCodes - React AI"} src={layout03} title={'Layout 3'}/>                        
                <CreateOption id={'04'} ref={_layout04} setSelectedCard={setSelectedLayoutCard} alt={"Layout 6 - MachineCodes - React AI"} src={layout04} title={'Layout 04'}/>                        
                
            </Row>

        </>

    );
};
  
export default LayoutOptions;
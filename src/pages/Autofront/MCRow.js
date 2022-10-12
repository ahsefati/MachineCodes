import { Button, Layout, Menu, Typography, Row, Divider, Switch, Card, Upload, Image, Radio, Affix, Col, Badge, Tooltip } from 'antd';
import {PlusCircleOutlined, AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined, PicCenterOutlined, DeleteOutlined} from '@ant-design/icons';

import React, {useState, useEffect } from 'react';
import MCCol from './MCCol';

const { Header, Content } = Layout;
const {Text} = Typography

const MCRow = (params) => {
    const borderColors = ['red', 'blue', 'purple', 'green', 'gray', 'orange', 'black']
    
    const [mccols, setMccols] = useState(params.mcrow.mccols)
    const [counterAsId, setCounterAsId] = useState(0)

    const addCol = () => {    
        const newCol = {id: counterAsId + 1, spanBig: 5, spanSmall:5, color:borderColors[Math.floor(Math.random()*borderColors.length)]}
        setCounterAsId(counterAsId+1)
        setMccols([...mccols, newCol])
    }

    // Each time a column is added to the row: this will update the MC-columns attribute of the MC-row.
    useEffect(()=>{
        params.mcrow.mccols = mccols
    },[mccols])

    // Run for one time: this will make the selected justify blue!
    useEffect(()=>{
        setTimeout(() => {
            const datatag_final = '[data-tag="'+ "rowJustify:" + params.mcrow.justify +'"]'
            const selected = document.querySelector(datatag_final);
            selected.style.color = "blue"
        }, 500);
    },[])

    const handleRemoveMCRow = (e) => {
        const toRemove = e.currentTarget.dataset.tag
        params.setMcrows(params.mcrows.filter(mcrow => mcrow.id != toRemove))
    }

    const [rowJustify, setRowJustify] = useState(params.mcrow.justify)
    const handleChangeRowJustify = (justify_, datatag) => {
        setRowJustify(justify_)
        const start_query = '[data-tag="' + params.mcrow.id + "rowJustify:start" + '"]'
        const start = document.querySelector(start_query);
        start.style.color = "black"
        const center_query = '[data-tag="' + params.mcrow.id + "rowJustify:center" + '"]'
        const center = document.querySelector(center_query);
        center.style.color = "black"
        const around_query = '[data-tag="' + params.mcrow.id + "rowJustify:space-around" + '"]'
        const space_around = document.querySelector(around_query);
        space_around.style.color = "black"
        const end_query = '[data-tag="' + params.mcrow.id + "rowJustify:end" + '"]'
        const end = document.querySelector(end_query);
        end.style.color = "black"

        const datatag_final = '[data-tag="'+datatag+'"]'
        const selected = document.querySelector(datatag_final);
        selected.style.color = "blue"
        params.mcrow.justify = justify_
    }

    return (
        <div key={params.mcrow.id}>  
            {params.createContentMode == "Edit Mode" &&   
                <Row>
                    <Tooltip  placement='top' title="Delete Row">
                        <DeleteOutlined data-tag={params.mcrow.id} onClick={handleRemoveMCRow} style={{cursor:'pointer', margin:'2px'}}/>
                    </Tooltip>
                    <Tooltip placement='top' title="Align Left">
                        <AlignLeftOutlined data-tag={params.mcrow.id + "rowJustify:start"} onClick={()=>handleChangeRowJustify("start",params.mcrow.id+"rowJustify:start")} style={{margin:'2px'}} />
                    </Tooltip>
                    <Tooltip placement='top' title="Align Center">
                        <AlignCenterOutlined data-tag={params.mcrow.id + "rowJustify:center"} onClick={()=>handleChangeRowJustify("center",params.mcrow.id+"rowJustify:center")} style={{margin:'2px'}}/>
                    </Tooltip>
                    <Tooltip placement='top' title="Align Space-Center">
                        <PicCenterOutlined data-tag={params.mcrow.id + "rowJustify:space-around"} onClick={()=>handleChangeRowJustify("space-around",params.mcrow.id+"rowJustify:space-around")} style={{margin:'2px'}}/>
                    </Tooltip>
                    <Tooltip placement='top' title="Align Right">
                        <AlignRightOutlined data-tag={params.mcrow.id + "rowJustify:end"} onClick={()=>handleChangeRowJustify("end",params.mcrow.id+"rowJustify:end")} style={{margin:'2px'}}/>
                    </Tooltip>
                    <Tooltip placement='top' title="Add Column">
                        <PlusCircleOutlined onClick={addCol} style={{margin:'2px'}}/>
                    </Tooltip>
                </Row>
            }  
            <Row align='middle' justify={rowJustify} style={{margin:'5px', borderRadius:'10px',}}>
                {
                    mccols.map(mccol =>
                        <MCCol createContentMode={params.createContentMode} key={mccol.id} mccols={mccols} mccol={mccol} setMccols={setMccols}/>                   
                    )        
                }
            </Row>
        </div>
    )
}


export default MCRow;
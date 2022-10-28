import {Typography} from 'antd';
import React, {useEffect, useState } from 'react';

import { useCookies } from 'react-cookie';

const {Text, Title} = Typography

const HeaderItem = (params) => {
    // Cookies of this Item (Component)
    const [cookies, setCookie, removeCookie] = useCookies();

    let prefixForCookiesName = params.mcrow.pageId + "/" + params.mcrow.id + "/" + params.mccol.id

    
    const [headerItemCookies, setHeaderItemCookies] = useState( {...cookies[prefixForCookiesName]}|| {
        'headerText': 'Change!',
        'headerSize': '12px',
        'headerColor': 'black',
        'headerBackgroundColor': 'inherit',
        'headerBorder': '0px',
        'headerBorderRadius': '0px',
        'headerBorderColor': 'black',
        'headerFont':'Times New Roman (serif)'
    })

    const headerItemStyles = {
        fontSize: headerItemCookies["headerSize"]==null?"12px":headerItemCookies["headerSize"],
        color: headerItemCookies["headerColor"]==null?"black":headerItemCookies["headerColor"],
        backgroundColor: headerItemCookies["headerBackgroundColor"]==null?"inherit":headerItemCookies["headerBackgroundColor"],
        border: headerItemCookies["headerBorderWidth"]==null?"0px":headerItemCookies["headerBorderWidth"] + " solid ",
        borderRadius: headerItemCookies["headerBorderRadius"]==null?"0px":headerItemCookies["headerBorderRadius"],
        borderColor: headerItemCookies["headerBorderColor"]==null?"black":headerItemCookies["headerBorderColor"],
        fontFamily: headerItemCookies["headerFont"]==null?"serif":headerItemCookies["headerFont"]
    }

    useEffect(()=>{
        let cookieStr = JSON.stringify(headerItemCookies)
        setCookie(prefixForCookiesName, cookieStr)
    },[headerItemCookies])
    

    return (
        <>
            {params.createContentMode === "Edit Mode" &&
                <Title style={headerItemStyles} editable={{onChange: (value) => setHeaderItemCookies({...headerItemCookies, "headerText":value})}}>{headerItemCookies["headerText"]==null?"change!":headerItemCookies["headerText"]}</Title>
            }

            {/* {params.createContentMode === "View Mode" &&
                <Title style={{fontSize:'calc(16px + 2vw)'}}>{titleText}</Title>
            } */}
            <button onClick={()=>{setHeaderItemCookies({...headerItemCookies, "headerBorderRadius":"2px"})}}>click</button>
        </>
    )
}


export default HeaderItem;
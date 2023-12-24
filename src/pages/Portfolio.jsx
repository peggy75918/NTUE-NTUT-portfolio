import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import PortfolioBar from "../components/PortfolioBar"
import PortfolioSidemenu from "../components/PortfolioSidemenu";
import PortfolioFilter from "../components/PortfolioFilter";
import PortfolioList from "../components/PortfolioList"

import Loading from "../components/Loading"

function Portfolio({ data, school }) {
    const params = useParams();
    const works = data[`${params.categroy}`];

    const sc = useParams();
    const navigate = useNavigate(); // 沒有刷新網頁的情況下更新連結
    const [ schoolIndex, setSchoolIndex ] = useState( sc==="NTUT"? 1 : 0 ); // 0=NTUE 1=NTUT

    return (
        <>
            <header id='port-header'>

                < PortfolioBar 
                    getIndex={ schoolIndex }
                    updateNTUE={ () => {setSchoolIndex(0); navigate('/ntue/112-1', { replace: true });} } 
                    updateNTUT={ () => {setSchoolIndex(1); navigate('/ntut/111-2', { replace: true });} }
                />
            
            </header>

            <body id='port-content'>
                    <PortfolioSidemenu school={school}/>
                    <PortfolioFilter />
                    <PortfolioList 
                        works={works}
                        school={school}
                        semester={params.categroy}
                    />
            </body>
        </>
    )
}

export default Portfolio
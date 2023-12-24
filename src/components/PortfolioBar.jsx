import React from "react"
import { Link } from 'react-router-dom';
import { ReadFilled } from '@ant-design/icons';

export default function PortfolioBar({getIndex, updateNTUE, updateNTUT}) {
    
    const _schoolIndex = getIndex
    
    return (
        <nav className='portbar-base'>
            <div className='container portbar'>
                <Link to='/'><div className='portbar-home-base'>

                    < ReadFilled className='portbar-home-icon'/>

                    { _schoolIndex ? 
                        "NTUTIXD's Portfolio" :
                        "NTUEIXD's Portfolio"
                    }

                </div></Link>

                <div className='portbar-school-base'>
                    
                    {/* 點擊 OnClick 時在 Portfolio.jsx 更新變數以及網址 */}
                    <input 
                        type="checkbox" 
                        id="switch" 
                        value={ _schoolIndex } 
                        checked={ _schoolIndex } 
                        onClick={ _schoolIndex ? updateNTUE : updateNTUT }
                    />
                    <label for="switch"></label>

                </div>
            </div>
        </nav>
    );
}
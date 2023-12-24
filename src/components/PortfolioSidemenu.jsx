import { Link } from 'react-router-dom';
import { useState } from 'react';

import { LeftSquareOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import { FireFilled } from '@ant-design/icons';
import { StarFilled } from '@ant-design/icons';
import { ThunderboltFilled } from '@ant-design/icons';
import { LayoutFilled } from '@ant-design/icons';
import { CloseSquareOutlined } from '@ant-design/icons';

export default function PortfolioSidemenu({ school}) {

    const [ sideMenuSearch, setSideMenuSearch ] = useState(false);

    const [ sideMenuTopYear, setSideMenuTopYear ] = useState(false);
    const [ sideMenuTopSearch, setSideMenuTopSearch ] = useState(false);

    const sideMenuSearchClick = () => {
        setSideMenuSearch(!sideMenuSearch);
    };

    const sideMenuTopYearClick = () => {
        setSideMenuTopYear(!sideMenuTopYear);
    };

    const sideMenuTopSearchClick = () => {
        setSideMenuTopSearch(!sideMenuTopSearch);
    };

    const styles = {
        show: {
            display: 'flex',
            cursor: 'pointer',
        },
        hide: {
            display: 'none',
        },
    };

    return (
        <>
        
            {/* 正常靠左版本 */}
            <div className='portsidemenu-base'>

                <Link to='/'>
                    <div className='portsidemenu-btn'><LeftSquareOutlined /><span className='portsidemenu-btn-text'>返回首頁</span></div>
                </Link>
                
                <div className='portsidemenu-btn' onClick={sideMenuSearchClick}><SearchOutlined /><span className='portsidemenu-btn-text'>搜尋作品</span></div>
                <div className='portsidemenu-search-overlay'
                    style={ sideMenuSearch? styles.show : styles.hide }
                >
                    <div className='portsidemenu-search-base'>
                        <CloseSquareOutlined onClick={sideMenuSearchClick} />
                        <input type='text' placeholder='搜尋'/>
                        <SearchOutlined />
                    </div>
                </div>

                <div className='portsidemenu-btn portsidemenu-hoverable'><FireFilled className='icon' /><span className='portsidemenu-btn-text'>112-期末</span></div>
                <Link to={`/${school}/112-1`}><div className='portsidemenu-btn portsidemenu-hoverable'><FireFilled className='icon'/><span className='portsidemenu-btn-text'>112-期中</span></div></Link>
                <Link to={`/${school}/111-2`}><div className='portsidemenu-btn portsidemenu-hoverable'><StarFilled className='icon'/><span className='portsidemenu-btn-text'>111-期末</span></div></Link>
                <Link to={`/${school}/111-1`}><div className='portsidemenu-btn portsidemenu-hoverable'><StarFilled className='icon'/><span className='portsidemenu-btn-text'>111-期中</span></div></Link>
                <Link to={`/${school}/110-2`}><div className='portsidemenu-btn portsidemenu-hoverable'><ThunderboltFilled className='icon'/><span className='portsidemenu-btn-text'>110-期末</span></div></Link>
                <Link to={`/${school}/110-1`}><div className='portsidemenu-btn portsidemenu-hoverable'><ThunderboltFilled className='icon'/><span className='portsidemenu-btn-text'>110-期中</span></div></Link>
            </div>
            

            {/* sm時靠上方版本 */}
            <div className='portsidemenu-topMode'>

                <div className='portsidemenu-topMode-base'
                    style={ !sideMenuTopSearch && !sideMenuTopYear? styles.show : styles.hide }
                >
                    <div className='portsidemenu-topMode-cat' 
                        onClick={sideMenuTopYearClick}
                    >
                        <LayoutFilled /><span>學年歷屆</span>
                    </div>
                    <div className='portsidemenu-topMode-cat' 
                        onClick={sideMenuTopSearchClick}
                    >
                        <SearchOutlined /><span>進階搜尋</span>
                    </div>
                </div>

                
                <div className='portsidemenu-topMode-base'
                    style={ sideMenuTopSearch ? styles.show : styles.hide }
                >
                    <LeftSquareOutlined onClick={sideMenuTopSearchClick} />
                    <input type='text' placeholder='搜尋'/>
                    <SearchOutlined />
                </div>


                <div className='portsidemenu-topMode-base'
                    style={ sideMenuTopYear ? styles.show : styles.hide }
                >
                    <LeftSquareOutlined onClick={sideMenuTopYearClick} />
                    <div className='portsidemenu-btn topMode'><FireFilled className='icon' /><span className='portsidemenu-btn-text'>112-期末</span></div>
                    <Link to={`/${school}/112-1`}><div className='portsidemenu-btn topMode'><FireFilled className='icon'/><span className='portsidemenu-btn-text'>112-期中</span></div></Link>
                    <Link to={`/${school}/111-2`}><div className='portsidemenu-btn topMode'><StarFilled className='icon'/><span className='portsidemenu-btn-text'>111-期末</span></div></Link>
                    <Link to={`/${school}/111-1`}><div className='portsidemenu-btn topMode'><StarFilled className='icon'/><span className='portsidemenu-btn-text'>111-期中</span></div></Link>
                    <Link to={`/${school}/110-2`}><div className='portsidemenu-btn topMode'><ThunderboltFilled className='icon'/><span className='portsidemenu-btn-text'>110-期末</span></div></Link>
                    <Link to={`/${school}/110-1`}><div className='portsidemenu-btn topMode'><ThunderboltFilled className='icon'/><span className='portsidemenu-btn-text'>110-期中</span></div></Link>
                </div>

            </div>
        </>
    );
}
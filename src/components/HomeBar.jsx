import { BookFilled } from '@ant-design/icons';

import { Link } from 'react-router-dom';

export default function HomeBar() {
    return (
        <header id='homebar-header'>
            <nav className='homebar-base'>
                <Link to='/'>
                <div className='container homebar'>
                    <BookFilled style={{ margin: '10px'}}/>
                    <p>Portfolio</p>
                </div>
                </Link>
            </nav>
        </header>
    );
}
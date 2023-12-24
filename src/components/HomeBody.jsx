import { Link } from 'react-router-dom';

import img_ntueLogo from './img/logo-ntue.svg';
import img_ntutLogo from './img/logo-ntut.svg';
import img_computer from './img/img-computer.svg';

export default function HomeBody() {

    return (

        <body className='container homebody'>
            <div className='homeleft'>
                    <p>Welcome to<br/>
                    "Class of<br/>
                    Website Design<br/>
                    & Development"</p>
                <div className='homebtn-base'>
                    <Link to='/ntue'><div className='homebtn-frame'><img className='homebtn-logo' src={img_ntueLogo}/>NTUE</div></Link>
                    <Link to='/ntut'><div className='homebtn-frame'><img className='homebtn-logo' src={img_ntutLogo}/>NTUT</div></Link>
                </div>
            </div>
            <div className='homeright'>
                <img className='homeimg' src={img_computer}/>
            </div>
        </body>
    );
}
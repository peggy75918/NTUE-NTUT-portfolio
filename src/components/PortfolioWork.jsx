import { useState } from 'react';

import { EyeFilled, HeartFilled } from '@ant-design/icons';
import { FilePptFilled } from '@ant-design/icons';
import { GithubFilled } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';
import img_404_e from "./img/img-school-NTUE.svg"
import img_404_t from "./img/img-school-NTUT.svg"

export default function PortfolioWork({ data, school, semester }) {

    const add404Img = (ev) => {
        {school == "ntue" ? ev.target.src = img_404_e : ev.target.src = img_404_t}
      }

    const getStatusStyle = (school) => {
        if (school == "ntue")  
            return 'portwork-imgframe-NTUE';
        else if(school == "ntut") 
            return 'portwork-imgframe-NTUT';
        else
            return 'portwork-imgframe-IMG';
    }
    const dynamicStyle = getStatusStyle(school);

    const [ heart, setHeart ] = useState(false);

    const heartClick = () => {
        setHeart(!heart);
    };

    return (
        <div className='portwork-base'>
            <div className='portwork-frame'>

                <div className='portwork-view'><EyeFilled style={{ paddingRight: '4px' }}/>123</div> 
                <a href={data.websiteUrl}>
                    <div className='portwork-imgframe'>
                        <img className={dynamicStyle} onError={add404Img} src={data.imgUrl} />
                    </div>
                </a>
                
                <div>
                    <div className='portwork-info-base'>
                        <div className='portwork-info-left'>

                            <p className='portwork-title'>{data.workName}</p>

                            <p className='portwork-team'>BY {data.name.join("＆")}</p>

                            <div className='portwork-tagrow'>
                                {data.skill && data.skill.length > 0
                                    ? data.skill.map((ele) =>
                                        ele !== "" ? <span className='portwork-tag' key={`skill-${ele}`}>{ele}</span> : null
                                        )
                                    : null}
                            </div>
                        </div>
                        <div className='port-work-info-right'>

                            <div className='portwork-icons'>
                                <a href={data.pptUrl}>
                                    <FilePptFilled style={{ paddingRight: '8px' , color: '#27005D'}} />
                                </a>
                                <a href={data.githubUrl}>
                                    <GithubFilled style={{ color: '#27005D'}}/>
                                </a>
                            </div>

                            {/* 愛心數 */}
                            <div className='portwork-hearts' onClick={heartClick}>
                                { heart?
                                    <HeartFilled style={{ paddingRight: '8px' }}/>:
                                    <HeartOutlined style={{ paddingRight: '8px' }}/>
                                }
                                114514
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
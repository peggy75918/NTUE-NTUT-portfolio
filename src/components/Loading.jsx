import img_loading from './img/Animation - 1701788396230.gif';

export default function Loading() {
    return (
        <div className='container loading-base'>
            <div className='warpper'>
                <img src={img_loading}/>
                <p>Loading...</p>
            </div>
        </div>
    );
}
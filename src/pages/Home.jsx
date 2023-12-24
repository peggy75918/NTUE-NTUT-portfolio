import React, {useState, useEffect} from "react"

import HomeBar from "../components/HomeBar"
import HomeBody from "../components/HomeBody"
import Loading from "../components/Loading"

function Home() {
    
    const [isLoading, setIsLoading] = useState(true); // 假載入，1000毫秒會自動加載
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    })

    return (
        <>
            < HomeBar />
            {isLoading?
                < Loading />:
                < HomeBody />
            }
        </>
    )
}

export default Home
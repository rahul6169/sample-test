import { useEffect,useState } from "react"
import {sampleDatas} from './sample'
export const Sample=()=>{
    const [searchText, setSearchText] = useState("")
    const [data,setData] = useState(sampleDatas)
    useEffect(()=>{
        if(!searchText) return setData(sampleDatas)
        setData(sampleDatas?.filter((data)=>(
            data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
        )))
    },[searchText])

    return(
        <>
        <input onChange={(e)=>{setSearchText(e.target.value)}} placeholder="Searh"></input>
            <div>
            {data?.map((data)=>(
                <>
                <p>
                    {data?.id}
                </p>
                <p>
                    {data?.name}
                </p></>
            ))}
            </div>
        </>
    )
}
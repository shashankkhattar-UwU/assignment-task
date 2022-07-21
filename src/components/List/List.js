import React, {useState} from 'react'
import ComplexList from '../ComplexList/ComplexList'
import './List.css'

function List({data, index, type, id}) {
  const [Expand, setExpand] = useState(false)
  return (
    <div className={`clickable ${type}`} >
        <span onClick={()=>{setExpand(!Expand)}}>{id} - {data.name}</span>
        {type!=='town'?(Expand?<><ComplexList type={(type==="state")?"city":"town"} data={data[(type==="state")?"cities":"towns"]} /></>:<></>):<></>}
    </div>
  )
}

export default List
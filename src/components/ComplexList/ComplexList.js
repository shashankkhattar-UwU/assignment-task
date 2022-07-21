import List from '../List/List'

function ComplexList({type, data}) {
  return (
    <div>
      {data.map((val, i)=>{
        return(
          <div>
            <List type={type} key={i} data={val} index={i+1} id={`${type}${i+1}`} />
          </div>
        )
      })}
    </div>
  )
}

export default ComplexList
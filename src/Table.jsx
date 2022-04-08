import "./Table.css"
export const Table = (props) => {
  console.log(props.showData.pincode)
    return (
        <div className="show">
           <p>{props.showData.name}</p>
           <p>{props.showData.age}</p>
           <p>{props.showData.date}</p>
           <p>{props.showData.state}</p>
           <p>{props.showData.address}</p>
           <p>{props.showData.pincode}</p>
        </div>
    )
}
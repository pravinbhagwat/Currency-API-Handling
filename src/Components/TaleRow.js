


let TableRow = ({obj, index})=>{
  
    return(
        <tr className="ele-row" key={index}>    
            <td>{obj.name}</td>
            <td>{obj.id}</td>       
            <td><img src={obj.image} alt="" /></td>
            <td>{obj.symbol}</td>
            <td>${obj.current_price}</td>
            <td>{obj.total_volume}</td>
        </tr>
    )
};

export default TableRow;



let TableRow = ({name, symbol, current_price,fully_diluted_valuation,market_cap,image,price_change_percentage,index})=>{
  
    return(
        <tr className="ele-row" key={index}>
            <td><img src={image} alt="" /></td>            
            <td>{name}</td>
            <td>{symbol}</td>
            <td>${current_price}</td>
            <td >${fully_diluted_valuation}</td>
            <td className={price_change_percentage>0? "pos": "neg"}>{price_change_percentage}%</td>
            <td>Mkt Cap: ${market_cap}</td>
        </tr>
    )
};

export default TableRow;
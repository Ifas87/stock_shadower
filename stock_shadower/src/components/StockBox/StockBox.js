import '../Container/Container.css';

function StockBox(props){
    return(
        <div className='stockbox'>
            <div style={{margin: "30px"}}> 
                <div className='Ticker'>{props.tick}</div>
                <div className='Comp_name'>{props.name}</div>
            </div>
            <div className='Value'>{props.value}</div>
        </div>
    );
}

export default StockBox;
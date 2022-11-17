import '../Container/Container.css';

function StockBox(){
    return(
        <div className='stockbox'>
            <div>
                <div className='Ticker'></div>
                <div className='Comp_name'></div>
            </div>
            <div className='Value'></div>
        </div>
    );
}

export default StockBox;
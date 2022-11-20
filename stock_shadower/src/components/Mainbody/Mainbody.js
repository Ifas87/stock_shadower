import '../Container/Container.css'
import StockBox from '../StockBox/StockBox';

function Mainbody(){
    return(
        <div className="secundo_in_primo">
            <StockBox tick="GOEV" name="GOOGLE" value="99"></StockBox>
        </div>
    )
}

export default Mainbody;
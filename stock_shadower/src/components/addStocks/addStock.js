import "../Container/Container.css";

function addStock(){
    return(
        <div className="secundo_in_primo">
            <form>
                <label>Enter stock name through ticker</label>
                <input type={text}></input>
            </form>
        </div>
    );
}

export default addStock;
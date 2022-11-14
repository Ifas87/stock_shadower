import '../Container/Container.css'
import BG from '../Container/BG_holder2.png'

function Mainbody(){
    return(
        <div className="primus_in_primo">
            <div className='title_fonts standard_box quinque'>Stock Shadower</div>
            <div className='sub_title_fonts standard_box unus'>Add</div>
            <div className='sub_title_fonts standard_box unus'>View</div>
            <div className='sub_title_fonts standard_box unus'>About</div>
            <div className='standard_box duo'><img src={BG} width={50} height={50}></img></div>
        </div>
    )
}

export default Mainbody;
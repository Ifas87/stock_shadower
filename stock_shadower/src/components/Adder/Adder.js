import '../Container/Container.css';
import TopBar from '../Topbar/Topbar';
import Mainbody from '../Mainbody/Mainbody'; 

function Adder(){
    return(
        <div>
            <div className='primis'>
                <TopBar></TopBar>
                <Mainbody></Mainbody>
            </div>
        </div>
    );
}

export default Adder;
import './Container.css';
import TopBar from '../Topbar/Topbar';
import Mainbody from '../Mainbody/Mainbody';

function Container(){
  return(
    <div className='primis'>
      <img src="BG_holder.png"></img>
      <TopBar></TopBar>
      <Mainbody></Mainbody>
    </div>
  );
}

export default Container;
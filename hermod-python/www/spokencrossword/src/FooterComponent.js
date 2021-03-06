import React from "react";
import { Button } from "react-bootstrap";
import {  Link } from "react-router-dom";
//import GoogleAds from 'react-google-ads'

import SlotListComponent from './SlotListComponent';

export default (props) => {
  return (
    <div className="hermodFooter" style={{overflowY:"scroll", backgroundColor: "rgba(137, 140, 224, 0.81)",textAlign:'left', borderTop: '1px solid black', height:'2.2em', width: '100%', position: "fixed", left: 0, bottom: 0}}>
    
      
      <Link style={{float:'right', marginRight:'0.8em'}} to='/about' ><Button style={{float: 'left'}} variant="primary"  size="sm" >About the Software  </Button></Link>
 <b style={{float:'left', marginRight:'0.8em'}}>&nbsp;&nbsp;<a rel="noopener noreferrer" target="_blank" style={{color: 'lightgrey'}} href='https://github.com/syntithenai/hermod' >Copyleft Steve Ryan</a>&nbsp;&nbsp;</b>
     
       <SlotListComponent slots={props.slots} />
     
    </div>
  );
};
  //<GoogleAds
        //client={props.adsenseClient}
        //slot={props.adsenseSlot}
        //style={{ display: 'inline-block', width: '100%', }}
        ///>
 //
  //   <div>{JSON.stringify(props.hermodClient)}</div>

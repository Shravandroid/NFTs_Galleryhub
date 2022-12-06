import React from 'react';
import Button from "../../CommonTo/Button";
import "./topFold.css";
import {TopFoldInfostats} from "./topFoldInfostats";
import {TopRightFoldStats} from "./topRightFoldStats"

const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
      <div className='tf-left'>
        <div className='tf-heading '>
          <span className='heading-gradient-2'><span className='heading-gradient-2'>Discover Collect</span><span className='heading-gradient'> Buy and Sell</span></span><div></div><span className='heading-gradient-2'>Extraordinary</span><div><span className='heading-gradient'> NFT's</span></div>
        </div>
        <div className='tf-details'>We Have Latest Trending NFT's So Please Make Sure To Buy And Sell NFT's and Also Share Our Page With Your Friends</div>
        <div className='tf-details-1'>Trending NFT's: Bored Ape, Voluptuous Curves, The Melting Pot, Zibaldone, An Eternal Tapestry</div>
        <div className='tf-left-btns'>
          <Button btnType="PRIMARY" btnText="Explore"/>
          <Button btnType="SECONDARY" btnText="Create" customClass="tf-left-secondary-btn"/>
        </div>
        <TopFoldInfostats />
      </div>

      <TopRightFoldStats />


    
    </div>

    
  );
};

export default TopFold;
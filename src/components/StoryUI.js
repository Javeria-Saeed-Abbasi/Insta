import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {AiOutlinePlusCircle} from 'react-icons/ai';
// import profile1 from "../../src/assets/images/profile1.avif";
// import profile2 from "../../src/assets/images/profile1.avif";
// import profile3 from "../../src/assets/images/profile1.avif";
import Image from 'react-bootstrap/Image'
// import {$} from 'jquery';

const StoryUI = () => {
  return (
    <div className='storyUI-btns'>
        
        <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" id="create-story" className='position-relative stroy-btn'>
        <Button variant="secondary" className='position-absolute' id="create-btn">
            <AiOutlinePlusCircle  fill="#296d98" stroke=''/>
        </Button>
      </Button>
      
      <Button variant="secondary" className='stroy-btn'>

      </Button>
     
      <Button variant="secondary" className='stroy-btn'></Button>
      <Button variant="secondary" className='stroy-btn'></Button>
      <Button variant="secondary" className='stroy-btn'></Button>
      <Button variant="secondary" className='stroy-btn'></Button>
    </ButtonGroup>
       
     
    </div>
  )
}

export default StoryUI;

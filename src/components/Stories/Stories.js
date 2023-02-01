import React from 'react';
import Story from 'react-insta-stories';


const Stories = () => {
    const stories = [
        {
            url: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            duration: 5000,

            header: {
                heading: 'Mohit Karekar',
                subheading: 'Posted 40m ago',
                profileImage: 'https://picsum.photos/100/100',
            },
      
    
        },
        {
            url: 'data:image/jpeg;base64,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',
            duration: 5000, // ignored
            type: 'video',

            header: {
                heading: 'Cat video',
                subheading: 'Posted 30m ago',
                profileImage: 'https://picsum.photos/100/100',
            },
        },

    ];
  return (
    <div>
      <Story
			stories={stories}
			defaultInterval={1000}
			width={432}
			height={768}
            
		/>
    </div>
  )
}

export default Stories;

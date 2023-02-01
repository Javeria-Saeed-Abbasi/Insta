import React, { useState } from "react";
import Stories from "@reactrondev/react-stories";
import "../App.css";
import Header from "../components/Header";
const data =[
        // User 1;
    {
        url: "https://picsum.photos/1080/1920",
        user_id: 1,
        header: {
            heading: "Mohit Karekar",
            subheading: "Posted 5h ago",
            profileImage: "https://picsum.photos/1000/1000",
          },
    stories:[
        {
            story_id: 1 ,
            url: "https://picsum.photos/1080/1920",
        },
        {
            story_id: 2,
            url: "https://picsum.photos/1080/1920",
        },

    ]
    },
    // User 2;
    {
        user_id: 2,
        url: "https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN",

        header: {
            heading: "Mohit Karekar",
            subheading: "Posted 32m ago",
            profileImage: "https://picsum.photos/1080/1920",
          },
    stories:[
        {
            story_id: 1 ,
            url: "https://picsum.photos/1080/1920",
        }
    ]
    },
    // User 3;
    {
        user_id: 3,
        url: "https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg",
        type: "video",
        header: {
            heading: "reactrondev/@reactrondev/react-stories",
            subheading: "Posted 32m ago",
            profileImage:
              "https://avatars0.githubusercontent.com/u/24852829?s=400&v=4",
          },
    stories:[
        {
            story_id: 1 ,
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
            type: "video",
        }
    ]
    },
     // User 4;
     {
        user_id: 4,
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        type: "video",
        header: {
            heading: "react-stories",
            subheading: "Posted 15m ago",
            profileImage:
              "https://avatars0.githubusercontent.com/u/24852829?s=400&v=4",
          },
    stories:[
        {
            story_id: 1 ,
                url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                type: "video",
              
        }
    ]
    },
]
// const stories = [
    
//   {
//     url: "https://picsum.photos/1080/1920",
//     header: {
//       heading: "Mohit Karekar",
//       subheading: "Posted 5h ago",
//       profileImage: "https://picsum.photos/1000/1000",
//     },
//   },
//   {
//     url: "https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN",
//     header: {
//       heading: "Mohit Karekar",
//       subheading: "Posted 32m ago",
//       profileImage: "https://picsum.photos/1080/1920",
//     },
//   },
//   {
//     url: "https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg",
//     header: {
//       heading: "reactrondev/@reactrondev/react-stories",
//       subheading: "Posted 32m ago",
//       profileImage:
//         "https://avatars0.githubusercontent.com/u/24852829?s=400&v=4",
//     },
//   },
//   // { url: 'https://www.youtube.com/watch?v=VFrP9BHhxPA', type: 'video', duration: 1000 },
//   {
//     url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
//     type: "video",
//   },
//   {
//     url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//     type: "video",
//   },
// //   "https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
// ];

// const stories = [
//     {
//         url: 'https://images.unsplash.com/photo-1514554873310-8783fbf45655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
//          duration: 2000,
//         header: {
//             heading: 'Mohit Karekar',
//             subheading: 'Posted 30m ago',
//             profileImage: 'https://picsum.photos/100/100',
//         },
//     },
//     {
//         url: 'https://www.youtube.com/watch?v=uHKfrz65KSU',
//          duration: 2000, // ignored
//          type: 'video',

//         header: {
//             heading: 'Cat video',
//             subheading: 'Posted 40m ago',
//             profileImage: 'https://picsum.photos/100/100',
//         },
//     },
//     {
//         content:(props) => (
//             <div style={{ background: 'pink', padding:20}}>
//                 <h1 style={{marginTop: '100%' , marginBottom:0 }}>Hi</h1>
//                 <h1 style={{marginTop: 5}}>  A custom title can go here.</h1>
//             </div>

//         )
//     },

//     ];

const Home = () => {
  const [currentId, setCurrentId] = useState(0);

  return (
    <div className="home">

      {/* <div className="header"> </div> */}
      <Header />
   
      <Stories
        currentIndex={currentId}
        loop
        keyboardNavigation
        defaultInterval={1500}
        stories={data}
        onStoryEnd={(s, st) => {
          console.log("story ended", s, st);
          setCurrentId((currentId) => currentId + 1);
          console.log(s);
        }}
        onAllStoriesEnd={(s, st) => {
          console.log("all stories ended", s, st);
          setCurrentId((currentId) => 0);
        }}
        onStoryStart={(s, st) => {
          console.log("story started", s, st);
          setCurrentId((currentId) => currentId + 1 - 1);
        }}
      />
    </div>
  );
};

export default Home;

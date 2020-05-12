import React from 'react';
import p from "./MyPost.module.css";


const MyPost = (prop) => {
  return (

          <div className ={p.item}>
              <img src ="https://avatars.yandex.net/get-music-user-playlist/27701/265236767.1000.16809/m1000x1000?1498108273588&webp=false"/>

              <span>{prop.inf}</span>
          </div>

  )
}

export default MyPost;

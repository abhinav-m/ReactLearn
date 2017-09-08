import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    return (
      
        <ul className = 'col-md-4 list-group'>
            {props.videos.map( (v,i) => <VideoListItem video = {v} key ={v.etag} onVideoSelect={props.onVideoSelect}/>)}
        </ul>
       
    );
};


export default VideoList;
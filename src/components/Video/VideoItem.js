import React from 'react'

const VideoItem = () => {
    let videoId = `h1FfrPcv53A`;
	const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div>
           	<iframe
				title="You Tube Video"
				className="embed-responsive-item"
				src={url}
			></iframe> 
        </div>
    )
}

export default VideoItem

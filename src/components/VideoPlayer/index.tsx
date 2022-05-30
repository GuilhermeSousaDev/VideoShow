import { FC, useEffect } from 'react';

const VideoPlayer: FC<{ id: string }> = ({ id }) => {
    useEffect(() => {
        console.log(id);
    }, [id]);

    return (
        <>
            <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls>

            </video>

            <h3>__VideoTitle__</h3>
        </>
    )
};

export default VideoPlayer;
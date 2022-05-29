import { FC, useEffect } from 'react';

const VideoPlayer: FC<{ id: string }> = ({ id }) => {
    useEffect(() => {
        console.log(id);
    }, [id]);

    return (
        <>
            <h1>__VideoTitle__</h1>

            <video src="">

            </video>
        </>
    )
};

export default VideoPlayer;
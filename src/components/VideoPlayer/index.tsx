import { FC, useEffect, useState } from 'react';
import { IVideo } from '../../interfaces/IVideo';
import api from '../../services/Axios';

const VideoPlayer: FC<{ id: string }> = ({ id }) => {
    const [video, setVideo] = useState<IVideo>();

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`video/${id}`);

            setVideo(data);
        })();
    }, [id]);

    return (
        <>
            {video && 
                <video src={`http://localhost:8081/${video.video}`} controls></video>
            }

            <h3>__VideoTitle__</h3>
        </>
    )
};

export default VideoPlayer;
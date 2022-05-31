import { FC, useEffect, useState } from 'react';
import api from '../../services/Axios';

interface IVideos {
    id: string;
    title: string;
    description: string;
    video: string;
    createdAt: Date;
    updatedAt: Date;
}

const Videos: FC = () => {
    const [videos, setVideos] = useState<IVideos[]>();

    useEffect(() => {
        (async () => {
            const { data } = await api.get('/video');

            setVideos(data);
        })(); 
    }, []);

    return (
        <>
            <h1>Videos</h1>
            
            { videos? videos.map(video =>
                <>
                    <h1>{ video.title }</h1>
                    <span>{ video.description }</span>
                    <video src={`http://localhost:8081/video/${video.video}`}></video>
                </>
            )
            : '' }
        </>
    )
}

export default Videos;
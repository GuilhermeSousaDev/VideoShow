import { 
    FC, 
    useEffect, 
    useState, 
    useCallback, 
    MouseEvent,
    useRef,
    MutableRefObject,
    } from 'react';
import api from '../../services/Axios';
import { app } from '../../config/global';

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

    const handleInitVideo = useCallback((e: MouseEvent<HTMLVideoElement>) => {
        const video = e.currentTarget;

        if (video.paused) {
            setTimeout(async () => await video.play(), 1500);
        }
    }, []);

    const handlePauseVideo = useCallback(async (e: MouseEvent<HTMLVideoElement>) => {
        const video = e.currentTarget;

        if (!video.paused) {
            video.pause();
        }
    }, []);

    return (
        <>
            <h1>Videos</h1>
            
            { videos? videos.map(video =>
                <>
                    <h1>{ video.title }</h1>
                    <span>{ video.description }</span>
                    <video 
                        key={video.id}
                        onMouseOver={handleInitVideo}
                        onMouseLeave={handlePauseVideo}
                        src={`http://localhost:8081/video/${video.video}`}
                        muted={true}
                        ></video>
                </>
            )
            : '' }
        </>
    )
}

export default Videos;
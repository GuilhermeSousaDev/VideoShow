import { 
    FC, 
    useEffect, 
    useState, 
    useCallback, 
    MouseEvent,
    } from 'react';
import api from '../../services/Axios';
import { Link } from 'react-router-dom';
import { IVideo } from '../../interfaces/IVideo';

const Videos: FC = () => {
    const [videos, setVideos] = useState<IVideo[]>();

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
                <Link to={`/video/${video.id}`} key={video.id}>
                    <h1>{ video.title }</h1>
                    <span>{ video.description }</span>
                    <video 
                        onMouseOver={handleInitVideo}
                        onMouseLeave={handlePauseVideo}
                        src={`http://localhost:8081/video/${video.video}`}
                        muted={true}
                        ></video>
                </Link>
            )
            : '' }
        </>
    )
}

export default Videos;
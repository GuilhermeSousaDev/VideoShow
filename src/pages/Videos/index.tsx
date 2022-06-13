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
import { appConfig } from '../../config/global';
import { IProgress } from '../../interfaces/IProgress';
import { Container } from './style';

const Videos: FC = () => {
    const [videos, setVideos] = useState<IVideo[]>();
    const [progress, setProgress] = useState<IProgress>();

    useEffect(() => {
        (async () => {
            const { data } = await api.get('/video', { 
                onDownloadProgress: pge => setProgress({ 
                    loaded: pge.loaded,  
                    total: pge.total
                }),
            });

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
        <Container>
            <h1>Videos</h1>
            
            { videos? videos.map(video =>
                <Link to={`/video/${video.id}`} key={video.id}>
                    <h1>{ video.title }</h1>
                    { progress && progress.loaded <= progress.total ?
                        <video 
                            onMouseOver={handleInitVideo}
                            onMouseLeave={handlePauseVideo}
                            src={`${appConfig.VIDEO_URL}/${video.video}`}
                            muted={true}
                        ></video> : 
                        <progress value={progress?.loaded}></progress>
                    }
                </Link>
            )
            : '' }
        </Container>
    )
}

export default Videos;
import { FC, useEffect, useState } from 'react';
import { appConfig } from '../../config/global';
import { IVideo } from '../../interfaces/IVideo';
import { FiArrowDown } from 'react-icons/fi';
import api from '../../services/Axios';
import { Container } from './style';
import { IProgress } from '../../interfaces/IProgress';

const VideoPlayer: FC<{ id: string }> = ({ id }) => {
    const [video, setVideo] = useState<IVideo>();
    const [show, setShow] = useState<boolean>(false);
    const [progress, setProgress] = useState<IProgress>();

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`video/${id}`, {
                onDownloadProgress: pge => setProgress({
                    loaded: pge.loaded,
                    total: pge.total
                }),
            });

            setVideo(data);
        })();
    }, [id]);

    return (
        <Container>
            {video && 
                <>

                    { progress && progress.loaded <= progress.total?
                        <video src={`${appConfig.VIDEO_URL}/${video.video}`} controls></video>
                        : <progress value={progress?.loaded}></progress>
                    }

                    <h3>{ video.title }</h3>

                    <p onClick={() => setShow(!show)}><FiArrowDown /></p>

                    { show ? 
                        <>
                            <h3>Description</h3>
                            <span>{ video.description }</span>
                        </> 
                    : '' }
                </>
            }
        </Container>
    )
};

export default VideoPlayer;
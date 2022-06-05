import { FC, useEffect, useState } from 'react';
import { app } from '../../config/global';
import { IVideo } from '../../interfaces/IVideo';
import { FiArrowDown } from 'react-icons/fi';
import api from '../../services/Axios';
import { Container } from './style';

const VideoPlayer: FC<{ id: string }> = ({ id }) => {
    const [video, setVideo] = useState<IVideo>();
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`video/${id}`);

            setVideo(data);
        })();
    }, [id]);

    return (
        <Container>
            {video && 
                <>
                    <video src={`${app.VIDEO_URL}/${video.video}`} controls></video>

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
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer';

const Video: FC = () => {
    const { id } = useParams();

    return (
        <>
            <h1>Video</h1>

            { id ? <VideoPlayer id={id} /> : '' }
        </>
    )
}

export default Video;
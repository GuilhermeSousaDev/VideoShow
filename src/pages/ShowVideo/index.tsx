import { FC } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer';
import { Container } from './style';

const Video: FC = () => {
    const { id } = useParams();

    return (
        <Container>
            { id ? <VideoPlayer id={id} /> : '' }
        </Container>
    )
}

export default Video;
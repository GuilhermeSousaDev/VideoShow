import { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import { Container, UploadContainer } from './style';
import FormVideoInfo from '../../components/FormVideoInfo';

const Upload: FC = () => {
    const [color, setColor] = useState<string>('');
    const [msg, setMsg] = useState<string>('Clique ou Arrasteo vídeo aqui');
    const [video, setVideo] = useState<File>();

    const { getRootProps } = useDropzone({
        onDragLeave: () => changeUploadContainer('white', 'Clique ou Arrasteo vídeo aqui'),
        onDragEnter: () => changeUploadContainer('yellow', 'Solte o Arquivo'),
        onDropAccepted: () => changeUploadContainer('green', 'Vídeo Recebido'),
        onDropRejected: () => changeUploadContainer('red', 'Arquivo não suportado'),
        onDrop: (files) => setVideo(files[0]),
    });

    const changeUploadContainer = useCallback((color: string, msg: string | null) => {
        setColor(color);
        if (msg) {
            setMsg(msg);
        }
    }, []);

    return (
        <Container>
            <h1>Upload</h1>
            <UploadContainer color={color} { ...getRootProps() }>
               <span>{ msg }</span>
               <FiUpload color={'black'} size={'70px'} />
            </UploadContainer>
             
            {video ? <FormVideoInfo 
                fn={changeUploadContainer} 
                video={video} /> 
            : '' }
        </Container>
    )
};

export default Upload;
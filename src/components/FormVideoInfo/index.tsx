import { 
    ChangeEvent, 
    FC, 
    useCallback, 
    useState, 
    useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/Axios";
import { Button, Form } from "./style";

interface IVideo {
    video: File | null;
    fn: (color: string, msg: string | null) => void;
}

interface IData {
    [key: string]: string;
}

interface IProgress {
    loaded: number;
    total: number;
}

const FormVideoInfo: FC<IVideo> = ({ video, fn }) => {
    const navigate = useNavigate();

    const [form, setForm] = useState<IData>();
    const [videoId, setVideoId] = useState<string>();
    const [progress, setProgress] = useState<IProgress>();

    useEffect(() => {
        if (progress) {
            if (progress?.loaded === progress?.total) {
                fn('white', 'Upload Finalizado !');

                setTimeout(() => navigate(`/video/${videoId}`), 1000);
            }
        }
    }, [progress, fn, navigate, videoId]);

    const handleSubmitVideo = useCallback(async () => {
        if (form && video) {
            const formData = new FormData();

            formData.append('title', form.title);
            formData.append('description', form.description);
            formData.append('file', video);

            const { data } = await api.post('/video', formData, {
                onUploadProgress: (progressEvent) => {
                    setProgress({
                        loaded: progressEvent.loaded,
                        total: progressEvent.total,
                    });
                },
            });

            setVideoId(data.id);
        }
    }, [form, video]);

    const handleChangeData = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ 
            ...form, 
            [e.target.name]: e.target.value 
        });
    }, [form]);

    return (
        <Form>
            { progress && progress.loaded > 0 ?
                <progress max={progress.total} value={progress.loaded}></progress> 
                : ''
            }    
            <h3>Video Infos</h3>
            <br />
            <input 
                onChange={handleChangeData}
                type="text" 
                name="title"
                placeholder="Title" 
            />
            <textarea 
                onChange={handleChangeData}
                name="description"
                placeholder="Description">
            </textarea>

            <Button onClick={handleSubmitVideo}>Submit</Button>
        </Form>
    )
};

export default FormVideoInfo;
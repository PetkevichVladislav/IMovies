import { FC, useCallback, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal";
import { removeMovie } from "../../../services/MovieRequestService";


export const RemoveMovieModal: FC = () => {
    const [isDeleteMovieConfirmationModelOpened, setIsDeleteMovieConfirmationModelOpened] = useState<boolean>(true);
    const [searchParams] = useSearchParams();
    const { id } = useParams<string>()
    const navigate = useNavigate();

    const handleClose = useCallback(() => {
        setIsDeleteMovieConfirmationModelOpened(false);
        navigate(-1);
    }, [navigate]);

    const handleConfirm = useCallback(() => {
        if(id) {
            removeMovie(id);
        }
        navigate(`/?` + searchParams.toString());
    }, [navigate, searchParams, id]);

    return (
        <ConfirmationModal isOpened={isDeleteMovieConfirmationModelOpened}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Delete movie"
        children="Are you sure you want to delete this movie?" />
    );
}
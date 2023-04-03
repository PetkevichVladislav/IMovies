import "./CreateMovieModal.scss";

import { FC, useCallback } from "react";
import { Button } from "../../Button/Button";
import { ModelBase } from "../ModalBase/ModalBase";
import { TextInput } from "../../Inputs/TextInput/TextInput";
import { TitledContainer } from "../../TitledContainer/TitledContainer";
import { TextAreaInput } from "../../Inputs/TextAreaInput/TextAreaInput";
import { CheckBoxInput, ICheckBoxInput } from "../../Inputs/CheckBoxInput/CheckBoxInput";
import { DropDownInput } from "../../Inputs/DropDownInput/DropDownInput";
import { DateTimeInput } from "../../Inputs/DateTimeInput/DateTimeInput";

export interface MovieModel {
    title: string;
    releaseDate: string;
    url: string;
    rating: string;
    runtime: string;
    overview: string;
}

export interface ICreateMovieModal {
    onSubmit: () => void;
    onClose: () => void;
    genreData?: ICheckBoxInput[];
    movie?: MovieModel | null;
    title?: string;
    isOpened: boolean;
}

const defaultGenres: ICheckBoxInput[] = [
    {
        "label": 'Comedy',
        "onChange": (state: boolean) => console.log("Comedy:" + state),
    },
    {
        "label": 'Sci-Fi',
        "defaultChecked": true,
        "onChange": (state: boolean) => console.log("Sci-Fi:" + state),
    }
]

const defaultMovie: MovieModel = {
    title: "Bohemian Rhapsody",
    rating: "9.4",
    releaseDate: "2022-09-03",
    runtime: "90 min",
    url: "https://BohemianRhapsody.com",
    overview: "description",
}


export const CreateMovieModal: FC<ICreateMovieModal> = ({ onClose, onSubmit, title, isOpened, movie = defaultMovie, genreData = defaultGenres }) => {
    const onFormSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const selectedGenres: Map<string, boolean> = new Map();
        for (const genre of genreData) {
            const name = genre.label.toLowerCase();
            const value = formData.get(name);

            selectedGenres.set(name, Boolean(value));
            formData.delete(name);
        }
        formData.set("selected genres", JSON.stringify(Object.fromEntries(selectedGenres)));
        onSubmit();
    }, [genreData, onSubmit])

    return (
        <>
            <ModelBase isOpened={isOpened} title={title} onClose={onClose}>
                <form onSubmit={onFormSubmit}>
                    <div className="create-movie-modal__inputs-grid">
                        <TitledContainer title="title">
                            <TextInput name="title" placeholder="start to input text" initialValue={movie?.title}></TextInput>
                        </TitledContainer>
                        <TitledContainer title="release date">
                            <DateTimeInput name="release date" initialValue={movie?.releaseDate}></DateTimeInput>
                        </TitledContainer>
                        <TitledContainer title="movie url">
                            <TextInput name="url" placeholder="https://" initialValue={movie?.url}></TextInput>
                        </TitledContainer>
                        <TitledContainer title="rating">
                            <TextInput name="rating" placeholder="7.8" initialValue={movie?.rating}></TextInput>
                        </TitledContainer>
                        <TitledContainer title="genre">
                            <DropDownInput placeholder="Select genre">
                                {genreData.map(data => <CheckBoxInput name={data.label.toLowerCase()} label={data.label} onChange={data.onChange} />)}
                            </DropDownInput>
                        </TitledContainer>
                        <TitledContainer title="runtime">
                            <TextInput name="runtime" placeholder="minutes" initialValue={movie?.runtime}></TextInput>
                        </TitledContainer>
                        <TitledContainer title="overview" error="error">
                            <TextAreaInput name="description" placeholder="movie description" height="197px" initialValue={movie?.overview}></TextAreaInput>
                        </TitledContainer>
                    </div>
                    <div className="create-movie-modal__buttons-container">
                        <Button isPrimary={false} text="reset" type="reset"></Button>
                        <Button isPrimary={true} text="confirm" type="submit"></Button>
                    </div>
                </form>
            </ModelBase>
        </>
    );
}
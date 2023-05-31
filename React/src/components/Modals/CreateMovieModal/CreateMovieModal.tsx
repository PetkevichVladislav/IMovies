import "./CreateMovieModal.scss";

import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../../Button/Button";
import { ModelBase } from "../ModalBase/ModalBase";
import { TextInput } from "../../Inputs/TextInput/TextInput";
import { TitledContainer } from "../../TitledContainer/TitledContainer";
import { TextAreaInput } from "../../Inputs/TextAreaInput/TextAreaInput";
import { CheckBoxInput, ICheckBoxInput } from "../../Inputs/CheckBoxInput/CheckBoxInput";
import { DropDownInput } from "../../Inputs/DropDownInput/DropDownInput";
import { DateTimeInput } from "../../Inputs/DateTimeInput/DateTimeInput";
import { useFormik } from "formik";
import { Genre } from "../../../models/enum/MenuGenre";
import { MovieModel } from "../../../models/MovieModel";
import { useNavigate, useSearchParams } from "react-router-dom";
import { createMovie, updateMovie } from "../../../services/MovieRequestService";
import { Loader } from "../../Loader/Loader";
import { movieValidationSchema } from "./CreateMovieModalValidation";

export interface ICreateMovieModal {
    onSubmit?: () => void;
    genres?: string[];
    movie?: MovieModel | null;
    title?: string;
    isOpened: boolean;
}

enum State {
    Loading = 0,
    Pending = 1,
    Success = 2,
    Error = 3,
}

export const CreateMovieModal: FC<ICreateMovieModal> = ({ title, isOpened, movie, genres = Object.keys(Genre).filter(genre => genre !== "All") }) => {
    const [state, changeState] = useState<State>(State.Pending);
    const [response, setResponse] = useState<MovieModel | undefined>();
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const handleClose = useCallback(() => {
        navigate(`/?` + searchParams.toString());
    }, [navigate, searchParams]);

    const redirectToMovie = useCallback((id: string) => {
        console.log(searchParams.toString());
        navigate(`/${id}?` + searchParams.toString());
    }, [searchParams, navigate]);

    useEffect(() => {
        if (state === State.Success) {
            response?.id && redirectToMovie(response?.id);
        }
    }, [state, response, redirectToMovie]);

    useEffect(() => {
        formik.validateForm();
    }, []);


    const formik = useFormik({
        initialValues: {
            title: movie?.title,
            date: movie?.releaseDate.toISOString().slice(0, 10),
            rating: movie?.rating.toString(),
            runtime: movie?.runtime?.toString(),
            imagePath: movie?.imagePath,
            overview: movie?.overview,
            genres: movie?.genres || new Array<string>(),
        },
        onSubmit: (values) => {
            changeState(State.Loading);
            const createMovieDto = {
                title: values.title!,
                genres: values.genres,
                overview: values.overview ? values.overview : " ",
                poster_path: values.imagePath!,
                release_date: values.date!,
                runtime: Number.parseInt(values.runtime!),
                vote_average: Number.parseFloat(values.rating!),
                vote_count: Math.floor(Math.random() * 1000),
                budget: Math.floor(Math.random() * 1000000),
                revenue: Math.floor(Math.random() * 100000),
                tagline: " ",
            };

            if (movie?.id) {
                const updateMovieDto = { ...createMovieDto, id: movie.id }
                updateMovie(updateMovieDto).then(movie => {
                    setResponse(movie);
                    changeState(State.Success);
                });
            } else {
                createMovie(createMovieDto).then(movie => {
                    setResponse(movie);
                    changeState(State.Success);
                });;
            }
        },
        validationSchema: movieValidationSchema,
    });

    const genreData: ICheckBoxInput[] = useMemo(() => {
        const defaultGenresWithMovieGenres = [...new Set(genres.concat(movie?.genres || []))];
        return defaultGenresWithMovieGenres.map(genre => {
            return {
                label: genre,
                onChange: (event) => {
                    const { checked, value } = event.target;
                    if (checked) {
                        formik.setFieldValue("genres", [...formik.values.genres, value]);
                    } else {
                        formik.setFieldValue(
                            "genres",
                            formik.values.genres.filter((v) => v !== value)
                        );
                    }
                },
                checked: false,
            }
        })
    }, [formik, genres, movie]);

    const getGenresError = useMemo(() => {
        if (Array.isArray(formik.errors.genres)) {
            return formik.errors.genres.join("\n");
        }

        return formik.errors.genres || "";
    }, [formik])

    return (
        <ModelBase isOpened={isOpened} title={title} onClose={handleClose}>
            {state === State.Loading && <Loader />}
            {state === State.Pending && <form onSubmit={formik.handleSubmit}>
                <div className="create-movie-modal__inputs-grid">
                    <TitledContainer title="title" error={formik.errors.title}>
                        <TextInput name="title"
                            placeholder="start to input text"
                            value={formik.values.title}
                            onChange={(changedValue?: string) => {
                                formik.setValues({ ...formik.values, title: changedValue });
                            }}></TextInput>
                    </TitledContainer>
                    <TitledContainer title="release date" error={formik.errors.date}>
                        <DateTimeInput name="release date"
                            value={formik.values.date}
                            onChange={(changedValue?: string) => {
                                formik.setValues({ ...formik.values, date: changedValue });
                            }}></DateTimeInput>
                    </TitledContainer>
                    <TitledContainer title="movie url" error={formik.errors.imagePath}>
                        <TextInput name="url"
                            placeholder="https://"
                            value={formik.values.imagePath}
                            onChange={(changedValue?: string) => {
                                formik.setValues({ ...formik.values, imagePath: changedValue });
                            }}></TextInput>
                    </TitledContainer>
                    <TitledContainer title="rating" error={formik.errors.rating}>
                        <TextInput name="rating"
                            placeholder="7.8"
                            value={formik.values.rating}
                            onChange={(changedValue?: string) => {
                                let normalizedValue = changedValue && changedValue.match(/[\d.]{0,3}/g)?.[0]
                                formik.setValues({ ...formik.values, rating: normalizedValue });
                            }}></TextInput>
                    </TitledContainer>
                    <TitledContainer title="genre" error={getGenresError}>
                        <DropDownInput placeholder="Select genre">
                            {genreData.map(data => <CheckBoxInput key={data.label.replace(" ", "") + "-key"} label={data.label} onChange={data.onChange} isChecked={formik.values.genres.includes(data.label)} />)}
                        </DropDownInput>
                    </TitledContainer>
                    <TitledContainer title="runtime" error={formik.errors.runtime}>
                        <TextInput name="runtime"
                            placeholder="minutes"
                            value={formik.values.runtime}
                            onChange={(changedValue?: string) => {
                                let normalizedValue = changedValue && changedValue.match(/[\d]{0,3}/g)?.[0];
                                formik.setValues({ ...formik.values, runtime: normalizedValue });
                            }}></TextInput>
                    </TitledContainer>
                    <TitledContainer title="overview" error={formik.errors.overview} >
                        <TextAreaInput name="description"
                            placeholder="movie description"
                            height="197px"
                            value={formik.values.overview}
                            onChange={(changedValue?: string) => {
                                formik.setValues({ ...formik.values, overview: changedValue });
                            }}></TextAreaInput>
                    </TitledContainer>
                </div>
                <div className="create-movie-modal__buttons-container">
                    <Button isPrimary={false} text="reset" type="reset"></Button>
                    <Button isPrimary text="confirm" type="submit"></Button>
                </div>
            </form>}
        </ModelBase>
    );
}
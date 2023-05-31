import * as Yup from 'yup';

const minDate = new Date(1850, 1, 1);
const maxYear = new Date().getFullYear() + 10;
const minUrlLength = 1;
const maxUrlLength = 256;
const maxOverviewLength = 1000;
const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

const requiredErrorMessage = "This field is required!";
const tooShortErrorMessage = "Too short!";
const ratingErrorValidationMessage = "Choose value between 0 and 10.0!";
const minDateErrorValidationMessage = "There are no such old movies!";
const maxDateErrorValidationMessage = `Select date earlier than ${maxYear}!`;
const urlErrorValidationMessage = "Is not valid url!";
const genreCountErrorValidationMessage = "Select at least one genre!";

export const movieValidationSchema = Yup.object().shape({
    title: Yup.string().min(2, tooShortErrorMessage).required(requiredErrorMessage),
    date: Yup.date().min(minDate, minDateErrorValidationMessage).max(maxYear, maxDateErrorValidationMessage).required(requiredErrorMessage),
    rating: Yup.number().max(10.0, ratingErrorValidationMessage).min(0, ratingErrorValidationMessage).required(requiredErrorMessage),
    runtime: Yup.number().min(1, tooShortErrorMessage).max(500).required(requiredErrorMessage),
    imagePath: Yup.string().min(minUrlLength, tooShortErrorMessage).max(maxUrlLength).matches(urlRegex, urlErrorValidationMessage).required(requiredErrorMessage),
    overview: Yup.string().max(maxOverviewLength).required(requiredErrorMessage),
    genres: Yup.array().min(1, genreCountErrorValidationMessage),
});
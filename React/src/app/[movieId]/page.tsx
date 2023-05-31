import { FunctionComponent, useEffect } from "react";

interface MovieDetailsPageProps {
    params : {movieId : number},
    searchParams: any,
}
 
const MovieDetailsPage: FunctionComponent<MovieDetailsPageProps> = ({ params, searchParams }) => {
    useEffect(() => {
        console.log(searchParams); 
    }, [searchParams]);
    return <div><div>Details</div><hr/><div>id : {params.movieId}</div></div>
}
 
export default MovieDetailsPage;
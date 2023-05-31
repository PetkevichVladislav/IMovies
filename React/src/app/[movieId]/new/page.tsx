import { FunctionComponent, useEffect } from "react";

interface NewModalPageProps {
    params : {movieId : number},
    searchParams: any,
}
 
const NewModalPage: FunctionComponent<NewModalPageProps> = ({ params, searchParams }) => {
    return <div>
        <div>New</div>
        <hr/><div>id : {params.movieId}</div>
        <hr/><div>searchParams : {JSON.stringify(searchParams)}</div>
    </div>
}
 
export default NewModalPage;
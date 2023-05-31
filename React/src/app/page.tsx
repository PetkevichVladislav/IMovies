import Link from "next/link";
import { FC } from "react";

interface HeaderPageProps {
    
}
 
const HeaderPage: FC<HeaderPageProps> = () => {
   
    return <><div>Header</div> <button><Link href={"/10/new"}>afaef</Link></button></>;
}
 
export default HeaderPage;
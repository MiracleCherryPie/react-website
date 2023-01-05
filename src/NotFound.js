import './NotFound.css'
import { Helmet } from "react-helmet";

export default function NotFound() {
    return (
    <>
    <Helmet>
        <title>404 Not Found</title>
    </Helmet>
    <div className='NotFound'>
        <h1>404 Not Found</h1>
        <p>You go to somewhere and didn't find anything. You want to go back but there's only one to get out from this dark place. The way is press back button on your browser</p>
    </div></>
    )
}
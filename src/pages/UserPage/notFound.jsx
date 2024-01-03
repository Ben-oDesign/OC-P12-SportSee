import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/user/12'>User 12</Link>
            <Link to='/user/18'>User 18</Link>
        </div>
    )
}
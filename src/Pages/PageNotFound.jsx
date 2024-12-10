import { Link } from 'react-router-dom'
import notFound from '../assets/pagenotfound.jpeg'
export const PageNotFound = () => {
    return (
        <div className='container text-center mt-5 ' >
            <img src={notFound} className='img-fluid ' />
            <p className='text-center'>
                <Link to="/" className='btn btn-danger'>
                    GoTo Home Page
                </Link>
            </p>
        </div>)
}

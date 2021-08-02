import {Link} from 'react-router-dom';
import './PolicyListing.css'
function PolicyListing(props){
    return (
        <Link to={props.src?props.src:("/policy/"+props.id)} className={"policy-listing-wrapper"}>
        <div className="policy-listing">
            <div className="policy-listing-header">
                <div className="policy-listing-header-title">
                    <h2>{props.name}</h2>
                </div>
                <div className="policy-listing-header-description">
                    {props.description}
                </div>
            </div>
        </div>
        </Link>

    )
}
export default PolicyListing;
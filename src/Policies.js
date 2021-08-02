import Navbar from "./minicomponents/Navbar";
import data from './_policies.json'
import PolicyListing from "./minicomponents/PolicyListing";
import './Policies.css';
function Policies(props){
    return (
        <>
        <Navbar />
        <div className="Policies-Container">
            <div className="Policies-Container-Title">
                <h1>{props.modified? props.title : "Policies"}</h1>
            </div>
            <div className="Policies-Container-Content">
                {props.modified
                    ?props.data.map(x => <PolicyListing {...x} /> )
                    :data.map(x => <PolicyListing {...x} />)
                }
            </div>
        </div>
        </>

    )
}
export default Policies;
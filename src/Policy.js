import { useParams } from 'react-router';
import Navbar from './minicomponents/Navbar';
import data from './_policies.json';
import './Policy.css'
function Policy(props) {
    let { id } = useParams()
    
    const policyObject = data.find(policy => policy.id === id);
    if (!policyObject) {
        return (
            <>
            <Navbar />
            <div className="Policy-Container">
            <div className="policy-name">{"The policy " + id + " does not exist."}</div>
            </div>
            </>
        )
    }
    return (
        <>
        <Navbar />
        <div className="Policy-Container">
            <div className="policy-name">{policyObject.name}</div>
            <div className="policy-description">{policyObject.description}</div>
            <div className="policy-text" dangerouslySetInnerHTML={{__html: policyObject.text.replace(/(?:\r\n|\r|\n)/g, '<br>') }}></div>
        </div>

        </>
    )
}
export default Policy;
import { oneLine } from 'common-tags';
import ReactTooltip from 'react-tooltip';
import './Pronoun.css'
function Pronoun(props){
    return (
        <>
        <span data-tip data-for={props.showPronoun}>{props.showPronoun}</span>
        <ReactTooltip id={props.showPronoun} place={"top"} type={"light"} effect={"solid"}>
            <p>
{(oneLine`This morning, ${props.dataPronoun.subject} went to the park.
I went with ${props.dataPronoun.object},
and ${props.dataPronoun.subject} brought ${props.dataPronoun.possessiveDeterminer} frisbee.
At least I think it was ${props.dataPronoun.possessive}.
By the end of the day, ${props.dataPronoun.subject} started throwing the frisbee to ${props.dataPronoun.reflexive}.`).split(".").join(".\n\n")}
            </p>
        </ReactTooltip>
        </>
    )
}
export default Pronoun
import classes from "./MeetupList.module.css";
import MeetupItems from "./MeetupItems";


function MeetupLists(props) {
    return <ul className={classes.list}>
        {props.items.map(m => <
            MeetupItems key={m.id} id={m.id} image={m.image} title={m.title} description={m.description} address={m.address}
            />)
        }
    </ul>

}

export default MeetupLists;
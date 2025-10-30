function IdCard(props){
    return (
        <div>
            <p>lastName: {props.lastName}</p>
            <p>firstName: {props.firstName}</p>
            <p>gender: {props.gender}</p>
            <p>height: {props.height}</p>
            <p>birth: {props.birth.toDateString()}</p>
            <p><img src={props.picture} alt={`${props.firstName} ${props.lastName}`} /></p>
        </div>
    );
}

export default IdCard
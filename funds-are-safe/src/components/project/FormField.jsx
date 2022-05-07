export default function FormField(props) {
    return (
        <div style={{width:"fit-content", display:props.display, marginLeft:props.marginLeft}}>
            <label htmlFor="title"> {props.title} </label> 
            <br/>
            <input type={props.type} name={props.name} style={{width:props.width}}></input>
        </div>
    )
}
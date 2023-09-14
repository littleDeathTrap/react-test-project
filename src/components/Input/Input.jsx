import './Input.css';
const Input = (props) => {
   // const inputValueChange = (event) =>console.log(event.target.value);
    return (
        <input className = 'input' name="name" onChange={props.onChange} />
    )
}
export default Input;
const FormInput = (props)=>{
    let input
    switch (props.type) {
        case "select":
            
            input = (
                <select type="text" name="" value={props.value} onChange={props.handleChange} >
                    
                   { props.options.map(option=>{
                        return <option value={option.value} key={option.id}>{option.name}</option>
                    })}
                </select>)
            break;
        
        case "readonly":
            input = <input type="text" readOnly name="" value={props.value} onChange={props.handleChange} />
            break;
    
        default:
            input = <input type="text" name="" value={props.value} onChange={props.handleChange} />
            break;
    }
    return input
}

export default FormInput
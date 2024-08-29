const TextArea = ({state, setState, label, name, regularExpression}) => {
  const onChange = (e) => {
    setState({...state, field: e.target.value});
  }
  
  const validation = () => {
    if(regularExpression){
      if(regularExpression.test(state.field)){
        setState({...state, correct: 'true'});
      }else{
        setState({...state, correct: 'false'});
      }
    }
  }
    return ( 
        <div className="flex flex-col items-center">
              <label
                className="text-zinc-900 dark:text-white tracking-wide cursor-pointer"
                htmlFor={name}
                correct={state.correct}
              >
                {label}
              </label>
              <textarea
                value={state.field}
                correct={state.correct}
                className={`${state.correct === 'true' || state.correct === null ? 'border-transparent' : 'border-red-600 focus:border-red-600'} p-2 outline-none rounded-md text-sm resize-none font-serif border-2`}
                id={name}
                name={name}
                cols="30"
                rows="10"
                onChange={onChange}
                onKeyUp={validation}
                onBlur={validation}
              ></textarea>
            </div>
     );
}
 
export default TextArea;
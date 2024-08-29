
const Input = ({state, setState, label, name, type, regularExpression}) => {

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
    <>
    <div className="flex items-center justify-start">
      <label
                  className="mr-2 text-zinc-900 dark:text-white tracking-wide cursor-pointer"
                  htmlFor={name}
                  correct={state.correct}
                >
                  {label}
                </label>
      <input
        type={type}
        id={name}
        name={name}
        value={state.field}
        onChange={onChange}
        onKeyUp={validation}
        onBlur={validation}
        correct={state.correct}
        className={`${state.correct === 'true' || state.correct === null ? 'border-transparent' : 'border-red-600 focus:border-red-600'} self-start outline-none rounded-md h-8 text-sm p-2 font-serif border-2`}
      />
    </div>
    </>
  );
};

export default Input;

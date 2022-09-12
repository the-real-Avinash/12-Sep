import React, {useRef,useState}from 'react'

const Form = () => {
    const name = useRef(null);
    const [show, setShow] = useState(false);
    const submitForm = (e) =>{
        e.preventDefault();
        console.log(name.current.value);
        const lName = name.current.value;
        lName === "" ? alert("Please Fill the Name") : setShow(true);
    }
  return (
    <>
    <form action='' onSubmit={submitForm}>
    <div>
        <label htmlFor='name'>Enter Your LuckyName</label><br/> 
        <input type="text" name="name" id="name"  ref={name}/>
    </div>
    <button>Submit</button>
    </form>
    <p>{show ? `Your lucky name is ${name.current.value}`: " "}</p>
    </>
  )
}

export default Form
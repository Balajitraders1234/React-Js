import style from './ContactForm.module.css';
import Button from '../button/Button';
import { MdMessage } from 'react-icons/md';
import { useState } from 'react';

const ContactForm = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [text , setText] = useState("");

  const onSubmit = (hello) => {
    hello.preventDefault();
    setName(hello.target[0].value);
    setEmail(hello.target[1].value);
    setText(hello.target[2].value);
   console.log({name, email , text});
  }

  return (
    <section className={style.container}>
      <div className={style.contact_form}>
        <div className={style.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
          <Button text="VIA CALL" icon={<MdMessage fontSize="24px"/>}/>
        </div>
        <Button isOutline={true} text="VIA " icon={<MdMessage fontSize="24px"/>}/>
      
        <form onSubmit={onSubmit}>
          <div className={style.form_control}>
          <label htmlFor="name">Name</label>
          <input type="name" name='name' placeholder='Name....'/>
        </div>
        <div className={style.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' placeholder='email....'/>
        </div>
        <div className={style.form_control}>
          <label htmlFor="text">Name</label>
          <textarea rows="8" name='text' placeholder='text....'/>
        </div>
        <div style={{display:'flex' , justifyContent:'end'}}> 
          <Button text="Submit" icon={<MdMessage fontSize="24px"/>}/>
        </div>
        <div>
          <h1>{name}</h1>
          <h3>{email}</h3>
          <h5>{text}</h5>

        </div>
        </form>
      </div>
      <div className={style.contact_image}>
        <img src="/images/Service2.png" alt="" />
      </div>
    </section>
  )
}

export default ContactForm
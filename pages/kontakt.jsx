import { useRouter } from 'next/router';
import React from 'react'

function contact() {

  // const {inputEmail, inputName, inputSubject, inputText} = React.useRef([]);
  const inputEmail    = React.useRef();
  const inputName     = React.useRef();
  const inputSubject  = React.useRef();
  const inputText     = React.useRef();

  const router = useRouter(

  )

  const onSubmit = async(e) => {
    e.preventDefault();
    const emailValue   = inputEmail.current.value;
    const namelValue   = inputName.current.value;
    const subjectValue = inputSubject.current.value;
    const textValue    = inputText.current.value;
    const eventId     = router?.query.id;

    try {
      const response = await fetch('./api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email   : emailValue, 
          name    : namelValue,
          subject : subjectValue, 
          text    : textValue,
          eventId
        })
      });

      if(!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log('POST', data)

      //POST fetch request
      // dend body emailValue and event ID
    } catch (e) {
      console.log('ERROR', e)
    }
  };

  return (
    <>
    <div className='container flex justify-between mt-[10rem] contact'>
      <div className='w-[40%] pr-[6rem]'>
        <form className='flex flex-col' onSubmit={onSubmit}>
            <label className=' mr-6 text-white'>Imię i nazwisko</label>
            <input ref={inputName} type='text' id='name' placeholder='Imię i nazwisko'></input>

            <label className=' mr-6 text-white'>e-mail</label>
            <input ref={inputEmail} type='email' id='email' placeholder='Wpisz swój adres e-mail'></input>

            <label className=' mr-6 text-white'>Temat</label>
            <input ref={inputSubject} type='text' id='subject' placeholder='Temat'></input>

            <label className=' mr-6 text-white'>Wiadomość</label>
            <textarea ref={inputText} type='textarea' rows="6" id='message' placeholder='Wiadomość'></textarea>

            <button className=' bg-white w-[20%] mt-20' type='submit'>Wyślij</button>
        </form>
      </div>
      <div className='w-[50%] pl-[6rem]'>
        sadasd
      </div>
    </div>
    </>
  )
}

export default contact
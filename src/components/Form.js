import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ContactForm() {
    const [form, setForm] = React.useState('Send');

    const onSubmit = (e) => {
        e.preventDefault()
        setForm('Submitting...')
        const {name, email, message} = e.target.elements
        let contact_form = {
          name: name.value,
          email: email.value,
          message: message.value
        }
        console.log(contact_form)
    }


  return (
    <div className='container mt-5'>
      <h2 className='mb-3'> Contact Form Test</h2>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input className='form-control' type='text' id='name' required />
        </div>

        <div className='mb-3'>
          <label className='form-label' htmlFor='email'>
            email
          </label>
          <input className='form-control' type='email' id='email' required />
        </div>

        <div className='mb-3'>
          <label className='form-label' htmlFor='message'>
            message
          </label>
          <textarea className='form-control' type='message' id='message' required />
        </div>

        <button className="btn btn-danger"  type='submit' >
          {form}
        </button>

      </form>
      
    </div>
  );
}

export default ContactForm;

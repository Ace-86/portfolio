import React from 'react';

function ContactForm() {
    const [form, setForm] = React.useState('Send');

    const onSubmit = (e) => {
        e.preventDefault()
        setForm('Submitting...')
        const {name, email, message}
    }


  return (
    <div>
      
    </div>
  );
}

export default ContactForm;

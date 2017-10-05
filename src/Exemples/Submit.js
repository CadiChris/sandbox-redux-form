import React from 'react'
import { Field, reduxForm } from 'redux-form'

const ExempleSubmit = ({ handleSubmit }) => {
  return (
    <div>
      <h2>Submit</h2>
      <form onSubmit={ handleSubmit }>
        <Field name="numero" component="input" type="text" placeholder="Numéro"/> <br/>
        <Field name="rue" component="input" type="text" placeholder="Rue"/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'ExempleSubmit',
  // onSubmit est définie ici, et sera appelée par ReduxForm.
  // Pas besoin de le déclarer dans les props en paramètre de <FormAdresse />
  onSubmit: (values) => console.log('onSubmit !', values),
})(ExempleSubmit)
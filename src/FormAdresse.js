import React from 'react'
import { Field, reduxForm } from 'redux-form'

const FormAdresse = ({ handleSubmit }) => {
  return (
    <div>
      <h2>Adresse</h2>
      <form onSubmit={ handleSubmit }>
        <Field name="numero" component="input" type="text" placeholder="Numéro"/> <br/>
        <Field name="rue" component="input" type="text" placeholder="Rue"/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'Adresse',
  // onSubmit est définie ici, et sera appelée par ReduxForm. Pas besoin de le déclarer dans les props <FormAdresse />
  onSubmit: (values) => console.log('onSubmit !', values),
})(FormAdresse)
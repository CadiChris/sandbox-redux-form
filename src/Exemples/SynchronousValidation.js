import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'

// (2) Si on veut disable le bouton si le form a des erreurs, on lui donne une prop
// qui est reseignée dans mSTP. Dans cet exemple la prop est "contientDesErreurs"
const ExempleSynchronousValidation = ({handleSubmit, erreursDansLeFormulaire}) => (
    <div>
      <h2>Synchronous Validation</h2>
      <form onSubmit={ handleSubmit }>
        <Field name="numero" component="input" type="text" placeholder="Numéro"/> <br/><br/>

        "Numéro" avec un renderField pour afficher les erreurs
        <Field name="numero" component={renderAvecErreursDeValidation} /> <br/>

        <Field name="rue" component="input" type="text" placeholder="Rue"/> <br/><br/>

        Disabled tant qu'il y a des erreurs dans le formulaire <br/>
        <button type="submit" disabled={erreursDansLeFormulaire}>Submit</button>
      </form>
    </div>
)

const renderAvecErreursDeValidation = ({input, meta}) => (
    <div>
      { /* Ici {...input} sert à propager les props ajoutés par redux-form https://redux-form.com/7.0.4/docs/api/field.md/#input-props */ }
      <input type="text" readOnly {...input} />
      {meta.error && <div style={{color:'orange'}}>{meta.error}</div>}
    </div>
)

const mapStateToProps = (state) => ({
  erreursDansLeFormulaire: state.form.ExempleSynchronousValidation && state.form.ExempleSynchronousValidation.syncErrors !== undefined
})

export default connect(mapStateToProps)(reduxForm({
  form:'ExempleSynchronousValidation',

  // (1) On implémente les règles de validation dans cette prop.
  // Si l'objet renvoyé est non vide, le formulaire ne peut pas être soumis.
  validate: (values) => {
    var errors = {};

    if (isNaN(Number(values.numero)))
      errors.numero = 'Numéro doit être numérique'

    if (!values.rue || values.rue.indexOf('rue') === -1)
      errors.rue = 'Le nom de rue doit contenir le mot "rue"'

    console.log('validation de', values, 'donne le résultat', errors);

    return errors
  },
  onSubmit: (values) => {
    console.log('submit', values)
  }
})(ExempleSynchronousValidation))
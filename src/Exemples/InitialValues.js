import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'

// C'est la prop initialValues qui sera utilisée par les Fields. Mais pas besoin de la déclarer
const ExempleInitialValues = () => {
  return (
    <div>
      <h2>Exemple Initial Values</h2>
      <form>
        <Field name="numero" component="input" type="text" placeholder="Numéro"/> <br/>
        <Field name="rue" component="input" type="text" placeholder="Rue"/><br/>
      </form>
    </div>
  )
}

// Dans le mapStateToProps on doit fournir une prop initialValues qui contient une valeur par champ.
const mapStateToProps = (state) => ({
  initialValues: {
    // La clé JS doit correspondre au @name du <Field />
    numero: state.app.compteur
  }
})

export default connect(mapStateToProps)(reduxForm({
  form: 'ExempleInitialValues',
  // On pourrait aussi fournir directement l'initialValues ici, mais on préférera initialiser depuis le state.
  // initialValues: {
  //   numero: 9,
  //   rue: "rue de Condé"
  // }
})(ExempleInitialValues))
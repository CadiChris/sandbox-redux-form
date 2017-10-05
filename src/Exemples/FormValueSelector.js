import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

const FormValueSelector = () => {
  return (
    <div>
      <h2>Form Value Selector</h2>
      On se branche sur les valeurs du formulaire "Exemple Submit"<br/>
      <form>
        <Field name="numero" component="input" type="text" placeholder="Numéro" readOnly /> <br/>
        <Field name="rue" component="input" type="text" placeholder="Rue" readOnly /><br/>
      </form>
    </div>
  )
}

// (1) Création du selecteur branché sur le formulaire 'ExempleSubmit'
// On récupère une fonction qui prend en paramètre le state et des noms de champs dont on veut les valeurs.
const selecteurSurFormulaireSubmit = formValueSelector('ExempleSubmit')

const mapStateToProps = (state) => ({
  initialValues: {
    numero: selecteurSurFormulaireSubmit(state, 'numero'),
    // L'équivalent sans passer par le selecteur serait :
    // numero: state.form.ExempleSubmit.values.numero
    // Mais le sélecteur gère tous les cas : champ pas encore initialité etc.
    rue: selecteurSurFormulaireSubmit(state, 'rue')
  },
  enableReinitialize: true,
})

export default connect(mapStateToProps)(reduxForm({
  form: 'FormValueSelector',
})(FormValueSelector))
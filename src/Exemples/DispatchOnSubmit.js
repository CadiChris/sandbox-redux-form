import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'


const ExempleDispatchOnSubmit = ({handleSubmit}) => (

    <div>
      <h2>Dispatch on Submit</h2>
      <form onSubmit={ handleSubmit }>
        <Field name="numero" component="input" type="text" placeholder="Numéro"/> <br/>
        <Field name="rue" component="input" type="text" placeholder="Rue"/><br/>
        <button type="submit">Submit</button><br/>
        <div style={{width:'160px'}}>
          Au submit on dispatch le numero. Cela va augmenter la valeur du compteur dans le state.
        </div>
      </form>
    </div>
)

const mapStateToProps = (state) => ({
  // (2) Si on veut que le champ du formulaire siot branché à la valeur du state de l'app :
  //  - on fournit une initialValue qui est sourcée sur le state de l'app
  //  - on enableReinitialize: true pour que les initialValues soient données au form dès qu'il y a eu submit
  //    si on omet enableResinitialize, le state est bien updaté (via dispatch) mais initialValues n'est pas mis à jour
  //    donc le form ne sait pas qu'il y a une nouvelle valeur.
  initialValues: {
    numero: state.app.compteur
  },
  enableReinitialize: true
})

// (1) c'est dans le mDTP qu'on peut faire le dispatch.
// La prop onSubmit est appelée par redux-form, qui fournit les "values".
// Donc on se sert des values et on dispatch avec.
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => {
    console.log('dispatch', values)
    dispatch({type: 'NUMERO', numero: values.numero})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'ExempleDispatchOnSubmit'
})(ExempleDispatchOnSubmit))
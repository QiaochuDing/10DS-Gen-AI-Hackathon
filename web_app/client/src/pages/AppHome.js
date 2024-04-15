import { UIContainerWrapper } from '../components/UIContainerWrapper'
import { ModalWrapper } from '../components/ModalWrapper'
import { H1, ErrorSummary } from 'govuk-react' 
import { DynamicForm } from '../components/FormBuilder'
import { useState } from 'react'


export function AppHome() {


    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalContentHtmlString, setModalContentHtmlString] = useState("")


    const fields = [
        { name: 'firstName', label: 'First Name', type: 'text' },
        { name: 'lastName', label: 'Last Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' }
      ];


    function display_result_callback(data) {
        setModalIsOpen(true)
        if (JSON.stringify(data) == "{}") {
            setModalContentHtmlString(<ErrorSummary description="You must enter content into a field for it to be passed as JSON" heading="No input fields were passed" />)
        } else {
            setModalContentHtmlString(JSON.stringify(data))
        }
        
    }

  return (
      <ModalWrapper modalOpenStatus={modalIsOpen} modalCloseCallback={function() { setModalIsOpen(false) } } htmlContent={modalContentHtmlString}>
     <UIContainerWrapper>


    <H1>
    Example Form Builder Application
  </H1>
    <div>
      <DynamicForm fields={fields} onSubmit={function(data) { display_result_callback(data)}} />
    </div>


     </UIContainerWrapper>
     </ModalWrapper>
  );
}

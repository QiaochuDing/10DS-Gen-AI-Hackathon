import { Page, H1 } from 'govuk-react'  
import { Navbar } from './Navbar'


export function UIContainerWrapper(props) {
    return (

<Page
  header={<Navbar />}
>
  {props.children}
</Page>
    );
  }
  
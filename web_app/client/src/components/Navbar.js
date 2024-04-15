import { TopNav } from 'govuk-react'  

export function Navbar() {
    return (
<TopNav
  company={<TopNav.Anchor href="/"><TopNav.IconTitle>GOV.UK</TopNav.IconTitle></TopNav.Anchor>}
  serviceTitle={<TopNav.NavLink href="/">Example Service</TopNav.NavLink>}
/>
    );
  }
  
import React, { useState } from 'react';
import { InputField, Button } from 'govuk-react';

const DynamicForm = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
<InputField
  input={{
    type: field.type,
    name: field.name,
    value: formData[field.name] || ''
  }}
  onChange={handleChange}
  id={field.name}
>
{field.label}
</InputField>


<br />
        </div>
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export { DynamicForm };
import React from 'react';

export default function VersionSelector() {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  return (
    <select onChange={handleChange}>
      <option value="">Selecciona una versión</option>
      <option value="/docs/pro6-documentacion">Pro 6</option>
      <option value="/prox-documentacion">Pro X</option>
    </select>
  );
}
import React, { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
  const [inputValue, setInputValue] = useState('');
  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes('@')) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide");
    }
  }
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionnè.e.s de plantes🌵🌵🌵
      </div>
      <div className="lmj-footer-elem">Laisez-nous votre mail:</div>
      <input
        type="text"
        placeholder="votre mail"
        value={inputValue}
        onChange={handleInput}
        onBlur={handleBlur}
      />
    </footer>
  );
}

export default Footer;

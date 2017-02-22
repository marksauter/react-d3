import React from 'react';

const {
  string, func
} = React.PropTypes;

const Hello = ({ subject = 'World', setSubject }) => {
  const handleSubmit =
    e => {
      const text = e.target.value.trim();
      if (e.which === 13 && text.length !== 0) {
        setSubject(text);
      }
    };

  const handleChange =
    e => {
      console.log('change');
      setSubject(e.target.value);
    };

  return (
    <div>
      <p>Hello, {subject}!</p>
      <input
        type="text"
        autoFocus="true"
        onKeyDown={handleSubmit}
        onChange={handleChange}
      />
    </div>
  );
};

Hello.propTypes =
  { subject: string
  , setSubject: func.isRequired
  };

export default Hello;

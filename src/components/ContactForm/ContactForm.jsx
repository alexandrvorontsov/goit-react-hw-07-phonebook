import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestAddContact } from 'redux/operations';
import { selectItems, selectNameData, selectNumberData } from 'redux/selectors';
import { setNameData, setNumberData } from 'redux/slice';
import {
  BodyForm,
  LabelForm,
  InputForm,
  ButtonForm,
} from './ContactForm.styled';

export const ContactForm = () => {
  const name = useSelector(selectNameData);
  const number = useSelector(selectNumberData);
  const contacts = useSelector(selectItems);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        dispatch(setNameData(value));
        break;
      case 'number':
        dispatch(setNumberData(value));
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(requestAddContact({ name, number }));
      resetForm();
    }
  };

  const resetForm = () => {
    dispatch(setNameData(''));
    dispatch(setNumberData(''));
  };

  return (
    <BodyForm onSubmit={handleSubmit}>
      <LabelForm>
        Name
        <InputForm
          placeholder="Jacob Mercer"
          type="text"
          name="name"
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
        />
      </LabelForm>
      <LabelForm>
        Number
        <InputForm
          placeholder="555-55-55"
          type="tel"
          name="number"
          required
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
        />
      </LabelForm>
      <ButtonForm type="submit">Add contact</ButtonForm>
    </BodyForm>
  );
};

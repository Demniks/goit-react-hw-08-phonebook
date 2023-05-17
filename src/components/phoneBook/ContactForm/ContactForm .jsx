import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { getContacts } from '../../../redux/contacts/selectors';
import { Box, Button, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { Form } from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  function handelInputChange(event) {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  }
  
  function reset() {
    setName('');
    setNumber('');
  }

  function handelSubmit(event) {
    event.preventDefault();

    const isExist = allContacts.find(contact => contact.name === name);
    
    if (isExist) {
      alert(`${name} is already in contacts list`);
      return;
    }

    dispatch(addContacts({ name, number }));
    reset();
  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752, width: 'inherit' }}>
      <Form onSubmit={handelSubmit}>
        <Typography variant="body" color="primary.contrastText">
          Name
        </Typography>

        <TextField
          sx={{ bgcolor: '#e0e0e0' }}
          label="name"
          // variant="outlined"
          variant="filled"
          autoComplete="off"
          type="text"
          name="name"
          value={name}
          onChange={handelInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />

        <Typography variant="body" color="primary.contrastText">
          Number
        </Typography>
        <TextField
          sx={{ bgcolor: '#e0e0e0' }}
          label="number"
          variant="filled"
          autoComplete="off"
          type="tel"
          name="number"
          value={number}
          onChange={handelInputChange}
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />

        <Button
          sx={{ marginTop: '10px' }}
          variant="contained"
          startIcon={<AddIcon />}
          type="submit"
        >
          Add contact
        </Button>
      </Form>
    </Box>
  );
}
import PropTypes from 'prop-types';

import { useState } from 'react';
import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ ButtonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name, email, phone, category,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input placeholder="Nome" value={name} onChange={({ target }) => setName(target.value)} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" value={email} onChange={({ target }) => setEmail(target.value)} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" value={phone} onChange={({ target }) => setPhone(target.value)} />
      </FormGroup>

      <FormGroup>
        <Select value={category} onChange={({ target }) => setCategory(target.value)}>
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {ButtonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  ButtonLabel: PropTypes.string.isRequired,
};

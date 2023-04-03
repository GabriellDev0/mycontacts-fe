import PropTypes from 'prop-types';
import { useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';

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
  const [errors, setErrors] = useState([]);

  const handleNameChange = ({ target }) => {
    setName(target.value);
    // Estou validando o target.value em vez do state Name porque,
    // O State ele é uma operação asyncrona, então se eu tentar pegar ele
    // logo em baixo, ele não vai estar com o valor devidamente atualizado
    // por isso estou usando target.value, pois é o valor que está no momento.
    if (!target.value) {
      setErrors((prevState) => [...prevState, {
        field: 'name',
        message: 'Nome é obrigatório.',
      }]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);

    if (target.value && !isEmailValid(target.value)) {
      const errorAlreadyExists = errors.find((error) => error.field === 'email');

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevState) => [...prevState, {
        field: 'email',
        message: 'E-mail inválido.',
      }]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'email',
      ));
    }
  };

  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input placeholder="Nome" value={name} onChange={handleNameChange} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" value={email} onChange={handleEmailChange} />
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

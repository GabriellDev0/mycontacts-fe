import Input from '../../Components/Input';
import Select from '../../Components/Select';
import PageHeader from '../../Components/PageHeader';
import Button from '../../Components/Button';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />

      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
      </Select>
      <Button type="button">
        Salvar Alterações
      </Button>
      <Button type="button" disabled>
        Salvar Alterações
      </Button>
    </>
  );
}

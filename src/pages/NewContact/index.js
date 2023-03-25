import Input from '../../Components/Input';
import Select from '../../Components/Select';
import PageHeader from '../../Components/PageHeader';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />

      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
      </Select>
    </>
  );
}

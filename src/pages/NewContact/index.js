import ContactForm from '../../Components/ContactForm';
import PageHeader from '../../Components/PageHeader';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm ButtonLabel="Cadastrar" />
    </>
  );
}

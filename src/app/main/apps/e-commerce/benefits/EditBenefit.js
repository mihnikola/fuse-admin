import { useState } from 'react';

// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import SelectOption from '../../UI/SelectOption';
import BackButton from '../../UI/BackButton';
import FileInput from '../../UI/FileInput';
import ButtonForm from '../../UI/FormButton';
import Heading from '../../UI/Heading';
import InputForm from '../../UI/InputForm';
import TextAreaForm from '../../UI/TextAreaForm';
import ModalForm from '../../UI/ModalForm';

function EditBenefit() {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex flex-col w-1/2 gap-10 m-10">
      <BackButton url="/izmeniKategorijuBenefit" />
      <Heading title="Izmeni benefit" />
      <InputForm label="Unesite naziv kompanije" value="Magnohrom" />
      <TextAreaForm value="In commodo id est nostrud laboris fugiat irure veniam enim id id incididunt. Dolor deserunt anim reprehenderit eiusmod quis irure ullamco commodo voluptate exercitation. Lorem nulla eu ullamco reprehenderit irure laboris id sunt labore pariatur ad cupidatat non. Eiusmod incididunt ad nisi proident deserunt aliqua mollit velit." />
      <SelectOption label="Izaberite benefit" value="10" />
      <div className="flex gap-5 ">
        <InputForm label="Unesite procenat" value="40" />
        <span> - </span>
        <InputForm label="Unesite procenat" value="60" />
      </div>
      <div className="flex gap-5 h-96">
        <img
          alt="Dodaj logo kompanije"
          src="assets/images/avatars/logo_magnohrom.jpg"
          height="100px"
          width="50%"
        />
        <img
          alt="Dodaj logo kompanije"
          src="assets/images/demo-content/mag.png"
          height="100px"
          width="50%"
        />
      </div>
      <InputForm label="Unesite web stranicu kompanije" value="https://magnohrom.com" />
      <InputForm label="Unesite telefon kompanije" value="+38162261993" />
      <InputForm label="Unesite email kompanije" value="magnohrom@gmail.com" />
      <InputForm label="Unesite adresu kompanije" value="Karadjordjeva 144" />
      <ButtonForm btnName="Dalje" onConfirm={modal} url="/izmeniBenefitZaposlene/123" />
    </div>
  );
}

export default EditBenefit;

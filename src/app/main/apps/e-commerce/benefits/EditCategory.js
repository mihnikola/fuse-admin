/* eslint-disable import/no-named-as-default-member */
// eslint-disable-next-line import/no-named-as-default
import SelectOption from '../../UI/SelectOption';
import BackButton from '../../UI/BackButton';
import FileInput from '../../UI/FileInput';
import ButtonForm from '../../UI/FormButton';
import Heading from '../../UI/Heading';
import InputForm from '../../UI/InputForm';

import TextAreaForm from '../../UI/TextAreaForm';

function EditBenefit() {
  return (
    <div className="flex flex-col w-1/2 gap-10 m-10">
      <BackButton url="nesto" />
      <Heading title="Kreiraj benefit" />
      <InputForm label="Unesite naziv kompanije" />
      <TextAreaForm />
      <SelectOption label="Izaberite benefit" value="10" />
      <div className="flex gap-5 ">
        <InputForm label="Unesite procenat" />
        <span> - </span>
        <InputForm label="Unesite procenat" />
      </div>
      <div className="flex gap-5">
        <FileInput label="Dodaj logo kompanije" />
        <FileInput label="Dodaj sliku za zacelje" />
      </div>
      <InputForm label="Unesite web stranicu kompanije" />
      <InputForm label="Unesite telefon kompanije" />
      <InputForm label="Unesite email kompanije" />
      <InputForm label="Unesite adresu kompanije" />
      <ButtonForm btnName="Dalje" />
    </div>
  );
}

export default EditBenefit;

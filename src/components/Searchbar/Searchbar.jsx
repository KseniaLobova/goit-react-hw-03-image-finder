import { Formik, Form, Field } from 'formik';
import { FiSearch } from 'react-icons/fi';
import { Seachbar, Searchform, Input, Btn } from './Searchbar.styled';

export const Searchbar = ({ onChange }) => {
  return (
    <Seachbar>
      <Formik
        initialValues={{ text: '' }}
        onSubmit={(values, action) => onChange(values.text)}
      >
        <Searchform>
          <Btn type="submit">
            <FiSearch />
            {/* <BtnLabel> Search</BtnLabel> */}
          </Btn>
          <Input
            type="text"
            name="text"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
          />
        </Searchform>
      </Formik>
    </Seachbar>
  );
};

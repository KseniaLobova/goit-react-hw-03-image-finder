import { BtnLoader } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <div>
      <BtnLoader type="button" onClick={loadMore}>
        Load more
      </BtnLoader>
    </div>
  );
};

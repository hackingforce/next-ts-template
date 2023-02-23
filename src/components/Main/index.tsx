import * as S from "./styled";

const Main = ({ title = "Boilerplate" }) => {
  return (
    <S.Wrapper>
      <S.Initial>{title}</S.Initial>
    </S.Wrapper>
  );
};

export default Main;

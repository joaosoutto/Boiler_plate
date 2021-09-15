import * as S from './styles'

const Main = ({
  title = 'NextJS Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description} w</S.Description>
  </S.Wrapper>
)

export default Main

import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';



export function Details(){

  return (
    <Container>
    <Header />

    <main>
      <Content>
    <ButtonText title="Excluir nota" />

    <h1>
      Introdução ao React
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Dolores itaque neque aut officiis id vel soluta laborum, 
      ipsam optio praesentium beatae minima amet, 
      recusandae pariatur deserunt illum vitae voluptatum. Animi!
    </p>
    <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">https://github.com/jpeccia</a>
          </li>
          <li>
            <a href="#">https://github.com/jpeccia</a>
          </li>  
        </Links>
    </Section>

    <Section title="Marcadores">
      <Tag title="express" />
      <Tag title="node" />
    </Section>

    <Button title="Voltar" />
    </Content>
    </main>
    </Container>
  )
}
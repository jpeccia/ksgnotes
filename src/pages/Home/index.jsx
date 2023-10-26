import { FiPlus } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'


export function Home(){
    return(
        <Container>
            <Brand>
            <h1>K$G Notes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Nodejs"/></li>
            </Menu>

            <Search>
                 <Input placeholder="Pesquisar pelo titulo"/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{ 
                        title: 'React', 
                        tags: [
                            {id: "1", name: 'react'},
                            {id: "2", name: 'express'}
                            ] 
                            }}
                            />
                </Section>

            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}
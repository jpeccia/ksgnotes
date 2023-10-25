import { Container, Profile } from './styles'

export function Header(){
    return (
        <Container>
            <Profile>
                <img src="https://github.com/jpeccia.png" 
                alt='Foto do Usuário'
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>João Otávio Peccia</strong>
                </div>


            </Profile>

        </Container>
    )
}
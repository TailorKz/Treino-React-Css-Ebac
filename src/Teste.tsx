import React from 'react'
import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize: string
}

const Botao = styled.button`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')}
  font-size: ${(props) => props.fontSize || '16px'}
`
function Teste() {
  return (
    <div>
      <Botao fontSize="18px" principal>
        Clique Aqui
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
    </div>
  )
}

export default Teste

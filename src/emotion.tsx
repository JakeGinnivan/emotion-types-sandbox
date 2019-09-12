import styled, { CreateStyled } from '@emotion/styled'

interface Theme {
  color: {
    primary: string
  }
}

export default styled as CreateStyled<Theme>
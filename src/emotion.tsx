import styled from '@emotion/styled'
import  { CreateThemedStyled } from 'emotion-theming'

interface Theme {
  color: {
    primary: string
  }
}

export default styled as CreateThemedStyled<Theme>
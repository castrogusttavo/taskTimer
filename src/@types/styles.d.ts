import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type ThemeType = typeof defaultTheme
// guardando o valor inferido das propriedades dentro da variável

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

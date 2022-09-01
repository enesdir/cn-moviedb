import type { TRenderProps } from '@/types/commonPropTypes'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }: TRenderProps): JSX.Element {
  return <>{children}</>
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer

export default Layout

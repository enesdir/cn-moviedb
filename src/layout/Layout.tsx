import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import type { TRenderProps } from '@/typings/commonPropTypes'

function Layout({ children }: TRenderProps): JSX.Element {
  return <>{children}</>
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer

export default Layout

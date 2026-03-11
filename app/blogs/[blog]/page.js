import Content from '@/_ui/blogdetails/content/Content'
import ContentEnd from '@/_ui/blogdetails/content/ContentEnd'
import Related from '@/_ui/blogdetails/related/Related'
import CutEdge from '@/_ui/blogs/cutedge/CutEdge'
import Hero from '@/_ui/blogs/hero/Hero'

function Blog() {
  const productsSlides = {
    title: "You May also like",
    slogan: "Explore our best accessories products ",
  }
  return (
    <div>
      <Hero />
      <Content />
      <CutEdge />
      <ContentEnd />
      <Related {...productsSlides}/>
    </div>
  )
}

export default Blog
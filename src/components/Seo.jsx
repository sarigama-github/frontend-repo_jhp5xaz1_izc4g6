import { useEffect } from 'react'

function setMetaTag(name, content) {
  if (!content) return
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setOgTag(property, content) {
  if (!content) return
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export default function Seo({ title, description, ogImage, url }) {
  useEffect(() => {
    if (title) document.title = title
    setMetaTag('description', description)
    setOgTag('og:title', title)
    setOgTag('og:description', description)
    setOgTag('og:type', 'website')
    if (url) setOgTag('og:url', url)
    if (ogImage) setOgTag('og:image', ogImage)
    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:title', title)
    setMetaTag('twitter:description', description)
    if (ogImage) setMetaTag('twitter:image', ogImage)
  }, [title, description, ogImage, url])
  return null
}

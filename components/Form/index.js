import React from 'react';
import Styled from './Styled';

const Form = ({urlToShorten, setUrlToShorten, slug, setSlug, handleRequest}) => {
  return (
    <Styled.Form>
      <Styled.Label htmlFor="url">Url to shorten</Styled.Label>
      <Styled.Input
        name="url"
        type="url"
        value={urlToShorten}
        onChange={(e) => setUrlToShorten(e.currentTarget.value)}
      />
      <Styled.Label htmlFor="slug">New slug</Styled.Label>
      <Styled.Input
        name="slug"
        type="text"
        value={slug}
        onChange={(e) => setSlug(e.currentTarget.value)}
      />
      <Styled.Button type="submit" onClick={(e) => {
        e.preventDefault();
        handleRequest({ urlToShorten, slug })
        }}>Go</Styled.Button>
    </Styled.Form>
  )
}

export default Form
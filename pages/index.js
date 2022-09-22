import { useState } from 'react';
import Styled, { GlobalStyle } from '../components/Styled';
import Form from '../components/Form';
import Message from '../components/Message';

export default function Home() {
  const [urlToShorten, setUrlToShorten] = useState('');
  const [slug, setSlug] = useState('');
  const [result, setResult] = useState({});

  async function handleRequest({ urlToShorten, slug }) {
    if (!urlToShorten.length) return;

    fetch('https://thakdees.dev.fast.sheridanc.on.ca/1pt//addURL.php?' + new URLSearchParams({
        url: urlToShorten,
        cu: slug,
    }))
    .then( response => response.json() )
    .then( response => {
        setResult(response);
    })
    .catch(function(e) {
      console.log("error", e);
    });
  }

  return (
    <Styled.Wrapper>
      <GlobalStyle />
      <Styled.Container>
      <Styled.Heading>Short that url!</Styled.Heading>
        <Form
          handleRequest={handleRequest}
          urlToShorten={urlToShorten}
          slug={slug}
          setUrlToShorten={setUrlToShorten}
          setSlug={setSlug}
        />
        {result.message && (
          <Message
            result={result}
            setResult={setResult}
            setUrlToShorten={setUrlToShorten}
            setSlug={setSlug}
          />
        )}
      </Styled.Container>
    </Styled.Wrapper>
  )
}

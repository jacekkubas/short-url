import {useState} from 'react';
import Styled, { GlobalStyle } from '../components/Styled';

export default function Home() {
  const [urlToShorten, setUrlToShorten] = useState('');
  const [slug, setSlug] = useState('');
  const [result, setResult] = useState({});
  const [copied, setCopied] = useState(false);

  async function handleRequest(e) {
    e.preventDefault();

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

  const handleCopy = async () => {
    if (result.short) {
      await navigator.clipboard.writeText(`https://1pt.co/${result.short}`);
      setCopied(true);
    }
  }

  return (
    <Styled.Wrapper>
      <GlobalStyle />
      <Styled.Container>
      <Styled.Heading>Short that url!</Styled.Heading>
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
          <Styled.Button type="submit" onClick={handleRequest}>Go</Styled.Button>
        </Styled.Form>
        {result.message && (
          <Styled.MessageWrapper>
            <Styled.Paragraph>{result.message}</Styled.Paragraph>
            <Styled.Paragraph>Shorten url is https://1pt.co/{result.short}</Styled.Paragraph>
            <Styled.CopyWrapper>
              <Styled.Button type="button" onClick={handleCopy}>Copy to clipboard</Styled.Button>
              {copied && (
                <Styled.Copied>Short url copied!</Styled.Copied>
              )}
            </Styled.CopyWrapper>
          </Styled.MessageWrapper>
        )}
      </Styled.Container>
    </Styled.Wrapper>
  )
}

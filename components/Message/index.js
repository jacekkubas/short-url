import React, { useState } from 'react';
import Styled from './Styled';

const Message = ({result, setResult, setSlug, setUrlToShorten}) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    if (result.short) {
      await navigator.clipboard.writeText(`https://1pt.co/${result.short}`);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }

  const handleClose = () => {
    setResult({});
    setSlug('');
    setUrlToShorten('');
  }

  return (
    <Styled.Wrapper>
      <Styled.Close onClick={handleClose}>X</Styled.Close>
      <Styled.Paragraph><strong>{result.message}</strong></Styled.Paragraph>
      <Styled.Paragraph>Shorten url is <a target="_blank" href={`https://1pt.co/${result.short}`} rel="noreferrer">https://1pt.co/{result.short}</a></Styled.Paragraph>
      <Styled.CopyWrapper>
        <Styled.Button type="button" onClick={handleCopy}>Copy to clipboard</Styled.Button>
        {copied && (
          <Styled.Copied>Short url copied!</Styled.Copied>
        )}
      </Styled.CopyWrapper>
    </Styled.Wrapper>
  )
}

export default Message
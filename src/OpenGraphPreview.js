import { LinkPreview } from '@dhaiwat10/react-link-preview'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
const OpenGraphPreview = (data) => {
  console.log(data)
  return (
    <Container>
      <LinkPreview url={data.url} width="450px" height="300px"></LinkPreview>
    </Container>
  )
}

export default OpenGraphPreview

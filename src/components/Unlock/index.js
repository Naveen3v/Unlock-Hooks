import {useState} from 'react'
import {MainContainer, Mini, Image, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [condition, setCondition] = useState(true)

  const changeCondition = () => setCondition(previous => !previous)
  return (
    <MainContainer>
      <Mini>
        {condition ? (
          <Image
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
        ) : (
          <Image
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
        )}
        {condition ? (
          <Paragraph>Your Device is Locked</Paragraph>
        ) : (
          <Paragraph>Your Device is Unlocked</Paragraph>
        )}
        <Button type="button" onClick={changeCondition}>
          {condition ? 'Unlock' : 'lock'}
        </Button>
      </Mini>
    </MainContainer>
  )
}
export default Unlock

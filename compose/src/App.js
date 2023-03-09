import Button from './Button'

const App = () => {
  return (
    <>
      <div>
        <Button warning rounded>Hey You!</Button>
      </div>
      <div>
        <Button success rounded outline>Click Me</Button>
      </div>
      <div>
        <Button danger outline>Hide Ads</Button>
      </div>
      <div>
        <Button warning>Buy Now</Button>
      </div>
      <div>
        <Button secondary rounded>Order Now</Button>
      </div>
    </>
  )
}

export default App
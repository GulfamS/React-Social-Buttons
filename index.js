const Button = props => {
  const {className, buttonText} = props
  return <button className={`button ${className}`}>{buttonText}</button>
}

const element = (
  <div className='bg-container'>
    <div className='heading-container'>
      <h1 className='heading'>Social Buttons</h1>
      <div className='buttons-container'>
        <div>
          <Button buttonText='Like' className='like-btn' />
        </div>
        <div>
          <Button buttonText='Comment' className='comment-btn' />
        </div>
        <div>
          <Button buttonText='Share' className='share-btn' />
        </div>
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

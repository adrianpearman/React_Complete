const app = {
  title: 'Another Title',
  subTitle: 'Another SubTitle',
  options: []
}

const appRoot = document.getElementById('app')

const onFormSumit = (event) =>{
  event.preventDefault()
  const option = event.target.elements.option.value;

  if (option) {
    app.options.push(option)
    event.target.elements.option.value = ''
    renderOptionsApp()
  } else {
    alert('Please enter an option')
  }
}

const clearOptions = (event) => {
  event.preventDefault()
  app.options = []
  renderOptionsApp()
}

const makeDecision = () => {
  const randNumber = Math.floor(Math.random() * app.options.length)
  const randSelection = app.options[randNumber]
  console.log(randSelection);
}

const renderOptionsApp = () => {
  const template =(
   <div>
     <h1>{app.title}</h1>
     {app.subTitle ? <p>{app.subTitle}</p> : null}
     {app.options.length > 0 ? <p>Here are your options</p> : <p>No options entered. <br /> Please enter an option</p>}
     <p>{app.options.length}</p>
     <button disabled={app.options.length === 0} onClick={makeDecision}> What should i do? </button>
     {app.options.length === 0 ? null : <button onClick={clearOptions}>Clear Option</button>}
     <ol>
       {app.options.map((option) => <li key={option}>{option}</li>)}
     </ol>
     <form onSubmit={onFormSumit}>
       <input type='text' name='option'/>
       <button>Add Option</button>
     </form>
   </div>
  )
  ReactDOM.render(template, appRoot)
}

renderOptionsApp()

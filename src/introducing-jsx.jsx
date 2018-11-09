const element = <h1>Hello, world!</h1>;

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDom.render(
  element,
  document.getElementById('root')
);

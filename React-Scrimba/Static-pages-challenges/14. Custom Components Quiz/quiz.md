1. What is a React component?
   React component is a reusable piece code that we can use in our program

2. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

myComponent name has camelCasing naming convension whereas in react the component are named in PascalCase naming convention. 3. What's wrong with this code?

```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```

when we render a function component we don't declare it like a normal function rather we declare it like a html element in for example in this case to call the component here we will use it like <Header />

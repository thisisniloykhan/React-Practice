1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?

in the index.html where we created a div with the id 'root'

2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
An object

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)

```
root.render can return only one element so we have to put in a container element like div, main...

4. What does it mean for something to be "declarative" instead of "imperative"?
in declarative we just tell what to do and the program just do it 
in imperative we have to put the line by line instruction

5. What does it mean for something to be "composable"?

composable means to use the piece of code in different part of program without repeating the code  
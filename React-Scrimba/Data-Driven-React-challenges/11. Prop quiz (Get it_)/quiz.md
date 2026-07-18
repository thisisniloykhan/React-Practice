1. What do props help us accomplish?
   props help us to put different type of data in a component to make the component more dynamic rather than hardcoding the data creating different components.

2. How do you pass a prop into a component?

we pass a prop to a component by writing it like a attribute in HTML but we can name it in however way we want but we have make sure our naming is consistent in similar component or else it create a bug.

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

no because native DOM element can only take fixed attributes whereas a component is function which takes a prop and saves it in a object

4. How do I receive props in a component?
   function Navbar(props) {
   return (
   <header>
   ...
   </header>
   )
   }

5. What data type is `props` when the component receives it?
   object

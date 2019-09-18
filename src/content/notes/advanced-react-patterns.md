---
id: "001"
index: 2
type: "notes"
title: 'Advanced React Patterns'
---


## Updater function within `setState`

Generally to toggle something in the state, we do this -

```
	this.setState({ isSwitchOn: !this.state.isSwitchOn })
```

**Kent C dodds way**

```
	this.setState(({isSwitchOn}) => ({ isSwitchOn: !isSwitchOn }))
   
```

Why using an updater function inside of the `setState` is better than using plain object - 
[This blog explains it very well](https://medium.com/@wisecobbler/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1)


**The rule is -**

- If your new state relies on the previous state, then definitely use the updater function, else you can use the object inside `this.setState`
- It is actively recommended to use this pattern / updater function inside `this.setState`


## Compound Component

Example -

```html
<select>
	<option />
<select>

```

Here `select` is the thing that holds the state and then `option` communicates with the parent to create.

Checkout this [Codesandbox](https://codesandbox.io/s/compound-components-osge4) for detailed explanation 



*SideNote* - 
ES6 import and exporting at the same time 

```
export { default as ImportedComponent } from './src/Component'; 
```
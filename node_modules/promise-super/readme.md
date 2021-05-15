# Promise Super

> Syntactic Sugar Imitation -- Self Entertainment

```javascript
const promiseSuper = require('promise-super')
```

```javascript
const promise = new promiseSuper(

	( resolve, reject ) => {

		if ( false )
		{
			reject('error')
		}
		else
		{
			resolve('success')
		}
	}

)
```

```javascript
promise
	.then(
		( data ) => {
			console.log( data ); // success
			return `message ${data}` // will pass on next then
		}
	)
	.catch(
		( error ) => {
			console.log( error ) // error
		}
	)
	.finally(
		( data ) => {
			console.log( data ) // data is latest then return
		}
	)
```

```javascript
promise.next(
	( data ) => {
		console.log( data ) // next run
	}
)
promise.then(
	( data, next ) => {
		next('next run')
	}
)
```

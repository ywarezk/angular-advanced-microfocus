# server

https://academeez-login-ex.herokuapp.com/api/users/login

post

```
{
	email: yariv@nerdeez.com,
	password: 12345678
}
```

response

```
{
	token: 'dfgsdfg353453sfvsasdfg'
}
```

```
{
	Set-Cookie: token=dfgsdfg353453sfvsasdfg
}
```

# After we get the token

https://academeez-login-ex.herokuapp.com/api/todo

header

```
{
	Authorization: Bearer dfgsdfg353453sfvsasdfg
}
```

# Interceptors


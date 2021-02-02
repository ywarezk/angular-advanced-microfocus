# Forms 

@microfocus/forms

## How angular wants us to look at forms?

- form structure
- describe this structure using FormControl, FormArray, FormGroup

## login

FormGroup { email: '', password: ''}
  - email - FormControl
  - password - FormControl
  
## Register

FormGroup - {email, passwordRepeat: {password, repeat}}
  - email - FormControl
  - FormGroup - {password, repeat} + validation
    - password - FormControl
    - repeat password - FormControl
    
## Phone form

FormGroup - { phones: [ {prefix, mainNumber } ] }
  FormArray 
    FormGroup    
      - Prefix
      - Main number






import React, { Component } from 'react';

import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const SubmitForm=()=> {
    const schema = yup.object().shape({
        name: yup.string().required("نام اجباری است"),
        email: yup.string().email().required(" ایمیل نامعتبر است"),
        age: yup.number().positive().min(18).max(100).required(),
        password: yup.string().min(4).max(10).matches(/[a-z]+/).matches(/[A-Z]+/).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password")]).required(),
      })
    const { register, handleSubmit ,formState :{errors} } = useForm({resolver : yupResolver(schema)});
    const onFormSubmit=(data)=>{
 console.log(data)
    }
  return (
<form onSubmit={handleSubmit(onFormSubmit)}>
  <input type='text' placeholder='Name...' {...register("name")} />
  {errors.name && (<p>{errors.name?.message}</p>)}
  <input type='text' placeholder='Email...' {...register("email")} />
  {errors.name && (<p>{errors.email?.message}</p>)}
  <input type='number' placeholder='Age...' {...register("age")} />
  {errors.name && (<p>{errors.age?.message}</p>)}
  <input type='password' placeholder='Password...' {...register("password")} />
  {errors.name && (<p>{errors.password?.message}</p>)}
  <input type='password' placeholder='Confirm Password...' {...register("confirmPassword")} />
  {errors.name && (<p>{errors.confirmPassword?.message}</p>)}
  <input type='submit' />

</form>
  
  );
}

export default SubmitForm;
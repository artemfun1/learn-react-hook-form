import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import './App.css'

interface IMyForm {
  name:string;
  age:number
}

function App() {

const {register, handleSubmit, clearErrors, formState:{errors}, reset, setValue,watch,control } = useForm<IMyForm>({
  defaultValues:{
    age:18
  }
})

const submit:SubmitHandler<IMyForm> = data => {
  console.log(data)
}

const error:SubmitErrorHandler<IMyForm> = data => {
  console.log('error',data)
}

const isName = (data:string) =>{
  if(data) return true
}



  return (
    <>
      <form onSubmit={handleSubmit(submit,error)}>
        <input type="text" {...register('name',{required:true , validate: isName})} aria-invalid={errors.name?true:false} />
        <Controller
        name='age'
        control={control}
        render={({field})=> <input {...field}/>}
        
        
        />
        {/* <input type="number" {...register('age')} /> */}
        <button>Send</button>
         <button type='button' onClick={()=>reset({
          age:0,
          name:''
         })}>Clear Form</button>
        <button type='button' onClick={()=>clearErrors()}>Clear Errors</button>
        <button type='button' onClick={()=>setValue('name','SetTestName')}>Set Name</button>
       
      </form>
      {watch('age')}
    </>
  )
}

export default App

import { useForm } from 'react-hook-form'

import { useUpdateUserDataMutation } from '@/services/base-api'

type FormValues = {
  avatar: FileList
  email: string
  name: string
}
export const UpdateForm = () => {
  const [patch] = useUpdateUserDataMutation()
  const { handleSubmit, register } = useForm<FormValues>({})

  const onSubmit = (data: FormValues) => {
    const formData = new FormData()

    formData.append('avatar', data.avatar[0])
    formData.append('name', data.name)
    formData.append('email', data.email)
    patch(formData)
  }

  return (
    <div style={{ margin: '150px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input style={{ color: 'black' }} type={'text'} {...register('name')} />

        <input type={'file'} {...register('avatar')} accept={'.jpg,.jpeg,.png'} />
        <input type={'email'} {...register('email')} />
        <button style={{ backgroundColor: 'black' }}>send</button>
      </form>
    </div>
  )
}

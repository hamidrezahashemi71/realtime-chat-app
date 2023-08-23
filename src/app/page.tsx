import { db } from '@/db'

export default async function Home() {

  await db.set('hello', 'hello')
  
  return (
    <div className='text-red-500'>HEY</div>
  )
}

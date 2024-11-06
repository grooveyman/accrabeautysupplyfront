import React from 'react'
import {useParams} from 'react-router-dom'
import Breadcrumbs from './components/Breadcrumbs';

const List = () => {
  const {category} = useParams()
  console.log(category);

  return (
    <main>
      <section className="max-w-full py-4 px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs />
        </div>
      </section>
    </main>
  )
}

export default List
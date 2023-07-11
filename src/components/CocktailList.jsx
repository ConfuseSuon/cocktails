import React from 'react'
import Cocktail from '../components/Cocktail'
import SearchForm from '../components/SearchForm'
import Loading from '../components/Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails, loading} = useGlobalContext();
  if(loading){
    return <Loading />
  }

  if(cocktails.length < 1){
    return(
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    )
  }


  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item)=>{
          return(<Cocktail key={item.id} {...item}  /> )
        })}
      </div>
    </section>
  )
}

export default CocktailList
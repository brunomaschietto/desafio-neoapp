import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import { GlobalContext } from '../../contexts/GlobalContext'

const BuyPage = () => {
  const context = useContext(GlobalContext)
  const {carrinho} = context
  console.log(carrinho)
  return (
    <div>
      <Header />
    </div>
  )
}

export default BuyPage
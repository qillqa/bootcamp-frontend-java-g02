import Link from 'next/link'
import React from 'react'

export default function ProductsPage() {
  return (
    <>
      <div>Products Page</div>

      <ul>
        <li>
          <Link href={`/home/products/1`}>Product 1</Link>
        </li>
        <li>
        <Link href={`/home/products/2`}>Product 2</Link>
        </li>
        <li>
        <Link href={`/home/products/3`}>Product 3</Link>
        </li>
      </ul>
    </>
  )
}
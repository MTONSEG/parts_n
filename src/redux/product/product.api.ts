import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '../../api'
import { IRootProduct } from './product.types'

export const productApi = createApi({
	reducerPath: 'api/products',
	baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
	endpoints: build => ({
		getProducts: build.query<IRootProduct, string | 'all'>({
			query: (category = 'all') =>
				category === 'all'
					? `/products?filters[category][type][$eq]=${category}`
					: `/products?populate=*`,
		}),
	}),
})

export const { useGetProductsQuery } = productApi

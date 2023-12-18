import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async () => {
      const response = await fetch('https://northwind.vercel.app/api/categories')
      const data = await response.json()
      return data
    }
  )


export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    value:[],
    isLoading:true,
    error:null,

  },
  reducers: {
   
  },

  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading=false
      state.value = action.payload
    })
    builder.addCase(getAllProducts.pending, (state) => {
        state.isLoading=true
      })

      builder.addCase(getAllProducts.rejected, (state,action) => {
        state.isLoading=false
        state.error = action.error
      })
  },
})

// Action creators are generated for each case reducer function
export const {  } = productsSlice.actions

export default productsSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  
  products:[
    {
      id: 1,
          image:"https://i.pinimg.com/564x/25/32/8d/25328d15bb1e02a5f56f7026f6f992f5.jpg",
      name: "Chapati",
      category: "breakfast",
      price: "20",
          description: " "
      },
  
    {
      id: 2,
        image: "https://i.pinimg.com/564x/57/d9/e1/57d9e1c66feccd1a48ed6a829a847155.jpg",
      name: "Pickle",
      category: "evening",
      price: "25",
      description: "  "
       },
    {
      id: 3,
        image: "https://i.pinimg.com/564x/e2/1d/e0/e21de0f4122d1926368bcd78cacd6ff6.jpg",
      name: "Sweets",
      category: "breakfast",
      price: "70",
      description: " "
          },
    {
      id: 4,
        image: "https://i.pinimg.com/736x/5f/a4/ff/5fa4ff2bb24e7d2601aa897d69c5292a.jpg",
      name: "Daal",
      category: "lunch",
      price: "150",
      description: "  "
       },
    {
      id: 5,
        image: "https://i.pinimg.com/564x/d8/81/78/d8817893d1acdb2e7db8258dc99a867a.jpg",
      name: "Paneer Dish",
      category: "evening",
      price: "250",
      description: " "
        },
  ],
  thali:[
    
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  
    addTothali: (state, action) => {
   
      state.thali.push(action.payload);
    },
    RemoveItem:(state,action)=>{
       state.thali.splice(action.payload,1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTothali ,RemoveItem } = counterSlice.actions;

export default counterSlice.reducer
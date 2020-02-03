const initialState = [
  {
    id: 1, 
    name: 'cookie', 
    price: 10, 
    units: 40
  },
  {
    id: 2, 
    name: 'cake', 
    price: 8, 
    units: 30
  },
  {
    id: 3, 
    name: 'pie', 
    price: 6, 
    units: 25
  }
]

export default (state = initialState, action) => {
  switch (action.type){
    default:
      return state;
  }
}
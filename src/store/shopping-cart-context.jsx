import { createContext } from 'react';

// pass value that will be used as init context value
export const CartContext = createContext({
	items: [],
	// empty dummy function
	addItemToCart: () => {}
});




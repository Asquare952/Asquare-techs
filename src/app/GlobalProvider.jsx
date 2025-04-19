import { CartProvider } from "@/app/context/CartContext";
import { FilterProvider } from "@/app/context/FilterContext";

export function GlobalProvider({ children }) {
  return (
    <FilterProvider>
      <CartProvider>{children}</CartProvider>
    </FilterProvider>
  );
}

import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import "./styles.css"
import { OrderLocationData, Product } from "./types";
import { fetchProduts, saveOrder } from "../api";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import Footer from "../Footer";
import { checkIsSelected } from "./helpers";

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    const totalPrice = selectedProducts.reduce((sum, item)=>{
        return sum+item.price ;
    },0)

    useEffect(()=>{
        fetchProduts()
            .then(response=>setProducts(response.data))
            .catch(()=>{
                toast.warning("Erro ao listar produtos");
            })
    }, []);

    

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload).then((response) => {
          toast.success(`Pedido enviado com sucesso! Nº ${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.error('Erro ao enviar pedido');
          })
      }

    return (
        <>
            <div>
                <StepsHeader />
                <ProductsList 
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation/><br/>
                <OrderSummary 
                    amount={selectedProducts.length} 
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer/>
        </>

    )
}
export default Orders;
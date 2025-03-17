import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios"
import { toast } from "react-toastify";

const getProductData = async () =>{
     const result = await axios.get("http://localhost:5000/product");
      return result.data
}
export const useProductData = () => {
     return useQuery({
           queryKey:["product-list"],
           queryFn: getProductData
     }) 
}

const postProductData = async (data) => {
    const result = await axios.post("http://localhost:5000/product" , data);
    return result.data
  };
  export const usePostProductData = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
       onMutate:()=>{},
       onError:(error)=>{
        const errorMessage = error.response?.data?.message || "Something went wrong!";
        toast.dismiss()

        toast.error(errorMessage);
             },
       onSuccess:(data)=>{
        queryClient.resetQueries(["product-list"])
        queryClient.invalidateQueries(["product-list"])
        toast.dismiss()

        toast.success(data?.message);
      },
       mutationFn:(data)=>postProductData(data)
    })
  }
 

const UpdateProductData = async ({id,data}) => {
    const result = await axios.put(`http://localhost:5000/product/${id}` , data);
    return result.data
  };
  export const useUpdateProductData = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
       onMutate:()=>{},
       onError:(error)=>{
        toast.dismiss()
        toast.error(data?.message);   
          },
       onSuccess:(data)=>{
        queryClient.resetQueries(["product-list"])
        queryClient.invalidateQueries(["product-list"])
        toast.dismiss()
        toast.success(data?.message);
       },
       mutationFn:({id,data})=>UpdateProductData({id,data})
    })
  }



const DeleteProductData = async (id) => {
    const result = await axios.delete(`http://localhost:5000/product/${id}`);
    return result.data
  };
  export const useDeleteProductData = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
       onMutate:()=>{},
       onError:(error)=>{
       },
       onSuccess:(data)=>{
        queryClient.resetQueries(["product-list"])
        queryClient.invalidateQueries(["product-list"])
        toast.dismiss()

        toast.success(data?.message);
       },
       mutationFn:(id)=>DeleteProductData(id)
  
    })
  }

  
import { Box,Flex,Text,Image, HStack,Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PaymentPage(){

    let [data,setData]=useState([])

    useEffect(() => {
        const getData = async () => {
          try {
            const product = await axios.get("https://fakestoreapi.com/products");
            setData(product.data);
            console.log(product.data)
          } catch (error) {
            console.log(error);
          }
        };
        getData();
      }, []);

      function payment(e){
        console.log(e)

      }

    return <>
            <Flex flexDir={'column'}>

                  <Flex py='10px' zIndex={'99'} position={'sticky'} top={'0px'} fontSize={'2xl'} fontWeight={'600'} justifyContent={'center'} color={'white'} bg='red.500' w={'100vw'}>
                       <h1>Payment Gateway</h1>
                  </Flex>
                  <Flex px='5vw' my='5vh' justifyContent={'space-between'} gap='2' flexWrap={'wrap'}>
                        {data?.map((e,i)=>{
                            return <>
                            <Flex key={i} alignItems={'center'} position={'relative'} flexDir={'column'} p='2' borderRadius={'md'} w={{base:'100vw',sm:"42vw",xl:'23%'}} boxShadow={'xl'}>
                                    <Box   fontSize={'18px'}>{e.title}</Box>
                                    <Image   maxH='200px' src={e.image}/>
                                    <Box   fontSize={'18px'} color={'green.400'}>Price : ₹{e.price}</Box>

                                    <HStack>
                                        <Flex><Text>Rating : {e.rating.rate}</Text></Flex>
                                        <Flex><Text>Count : {e.rating.count}</Text></Flex>
                                    </HStack>
                                    <Text mb='50px' fontSize={'11px'}>{e.description}</Text>
                                    <Button onClick={()=>{payment(e)}} _hover={{bg:"green.700"}}  bottom={'10px'} position={'absolute'}>Make Payment</Button>
                                </Flex>
                            </>
                        })}
                  </Flex>
            </Flex>
    </>
}
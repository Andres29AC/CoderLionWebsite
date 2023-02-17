import { Link,Grid,Box ,SlideFade} from "@chakra-ui/react";
import {useEffect, useRef, useState} from 'react';
export default function Project({text,link,...props}){
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  //ANCHOR Esta funcion se ejecutara cuando el componente se
  //ANCHOR renderize por primeraa vez
  useEffect(() => {
  ref.current.addEventListener('mouseover', () => setIsOpen(true));
  ref.current.addEventListener('mouseleave', () => setIsOpen(false));
  },[]);
  return (
    <Link w="full"
          h="full" 
          minH="100px" 
          href={link} 
          target="_blank"
          style={{textDecoration:'none'}}
    >  
        <Grid
    placeItems={"center"}
    {...props}
    ref={ref}
      w="full"
      h="full"
      minH="100px"
      _hover={{background:"rgba(255,255,255,0.3)"}}>
      <SlideFade in={isOpen} offsetY='20px'>
        <Box
          p='20px'
          color='white'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
         {text}
        </Box>
      </SlideFade>
    </Grid>
    </Link>
  ); 
}

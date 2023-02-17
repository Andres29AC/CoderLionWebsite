import { Link, Grid, Box, SlideFade } from "@chakra-ui/react";
import { useEffect, useRef, useState } from 'react';
import { Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { SiHackaday } from "react-icons/si";
//import { GiLion } from "react-icons/gi";
//import {FaLaptopCode} from "react-icons/fa";
export default function Project({ text, link, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  //ANCHOR Esta funcion se ejecutara cuando el componente se
  //ANCHOR renderize por primeraa vez
  useEffect(() => {
    ref.current.addEventListener('mouseover', () => setIsOpen(true));
    ref.current.addEventListener('mouseleave', () => setIsOpen(false));
  }, []);

  const rotateStyle = {
    transition: 'transform 0.2s',
    transform: isOpen ? 'rotate(360deg) scale(1.7)' : 'rotate(0deg)',
  };

  return (
    <Link
      w="full"
      h="full"
      minH="100px"
      href={link}
      target="_blank"
      style={{ textDecoration: 'none' }}
      ref={ref}
      position="relative"
      top={"50%"}
      left={"50%"}
      transform="translateX(-50%) translateY(-50%)"
      _hover={{ background: "rgba(255,255,255,0.3)" }}
    >
      <Icon
        zIndex={-1}
        color={"black"}
        position="absolute"
        boxSize="40px"
        top={"10%"}
        left={"44%"}
        as={SiHackaday}
        style={rotateStyle}
      />
      <Grid
        templateColumns="1fr"
        templateRows="1fr"
        placeItems={"center"}
        {...props}
        w="full"
        h="full"
        minH="100px"
      >
        <SlideFade in={isOpen} offsetY='20px'>
          <Box
            p='6px'
            color='white'
            bg='teal.500'
            rounded='md'
            shadow='md'
            _hover={{ bg: 'teal.600'}}
            _focus={{ bg: 'teal.600'}}
          >
            {text}
          </Box>
        </SlideFade>
      </Grid>
    </Link>
  );
}

import { Link,Heading,HStack, VStack, Icon, Text } from "@chakra-ui/react";
import styles from '../styles/index.module.css'
import { VscGithub } from "react-icons/vsc";
import { MdAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
export default function Informacion(){
    return(
        <VStack gridArea="t">
        <div className={styles.card}>
        <Heading fontSize={"2xl"} textAlign="center">Andre Amaro Castillo</Heading>
        <Text fontSize={"small"} textAlign="center">Desarrollador de software.Aqui encontraras algunos proyectos</Text>
        </div>
        <HStack spacing={"6"}>
        <div className={styles.icons}>
        <Link href="https://github.com/Andres29AC" target={"_blank"}  >
          <Icon as={VscGithub} boxSize="40px" color="black" title="github"/>
        </Link>
        </div>
        <div className={styles.icons} >
        <Link href="mailto:lionAS_45@hotmail.com" >
          <Icon as={MdAttachEmail}  boxSize="40px" color="black" title="email"/>
        </Link>
        </div>
        <div className={styles.icons} >
        <Link href="https://www.linkedin.com/feed/" target={"_blank"}>
          <Icon as={FaLinkedin}  boxSize="40px" color="black"  title="linkedin"/>
        </Link>
        </div>
        </HStack>
      </VStack>
    )
}



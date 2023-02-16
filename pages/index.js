import Project from "@/components/project";
import { Grid, Heading, VStack, Image, Text } from "@chakra-ui/react";
import styles from '../styles/index.module.css';
export default function Home() {
  return(
    <Grid className={styles.overlapGrid} placeItems="center">
      <Image
        borderRadius='full'
        boxSize='180px'
        src='/tokuno2.jpg'
        alt='CoderLion'
      />
      <VStack>
        <Heading>Andre Amaro Castillo</Heading>
        <Text>Esta pagina es mi portafolio</Text>
      </VStack>
      <Project text="proyecto 1" />
      <Project text="proyecto 2" />
      <Project text="proyecto 3" />
      <Project text="proyecto 4" />
      <Project text="proyecto 5" />
    </Grid>
  );
}

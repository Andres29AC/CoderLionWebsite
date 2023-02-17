import Project from "@/components/project";
import { Grid, Heading, VStack, Image, Text } from "@chakra-ui/react";
import styles from '../styles/index.module.css';
export default function Home() {
  return(
    <Grid 
    className={styles.overlapGrid} 
    placeItems="center"
    //NOTE: Este pading se activara cuando estemos
    //NOTE: por columnas 
    p={[3,3,0]} 
    //templateColumns={["1fr", "1fr 1fr","repeat(4,1fr)"]}
    templateColumns={["1fr", "repeat(2,1fr)","repeat(4,1fr)"]}
    templateAreas={[
      '"i" "t" "p1" "p2" "p3" "p4" "p5" "p6" "p7" "p8" "p9" "p10"',
      '"i t" "p1 p2" "p3 p4" "p5 p6" "p7 p8" "p9 p10"',
      '"p1 p2 p3 p4""p5 i t p6" "p7 p8 p9 p10"',
    ]}
    minH="100vh"
    >
      <Image
        borderRadius='full'
        boxSize='110px'
        src='/tokuno2.jpg'
        alt='CoderLion'
        gridArea="i"
      />
      <VStack gridArea="t">
        <Heading fontSize={"2xl"}>Andre Amaro Castillo</Heading>
        <Text>Este es mi portafolio</Text>
      </VStack>
      <Project text="gitHub"  link="https://www.google.com/"gridArea="p1"/>
      <Project text="proyecto 2" link="https://www.google.com/"gridArea="p2"/>
      <Project text="proyecto 3"  link="https://www.google.com/"gridArea="p3"/>
      <Project text="proyecto 4" link="https://www.google.com/"gridArea="p4"/>
      <Project text="proyecto 5" link="https://www.google.com/"gridArea="p5"/>
      <Project text="proyecto 6" link="https://www.google.com/"gridArea="p6"/>
      <Project text="proyecto 7" link="https://www.google.com/"gridArea="p7"/>
      <Project text="proyecto 8" link="https://www.google.com/"gridArea="p8"/>
      <Project text="proyecto 9" link="https://www.google.com/"gridArea="p9"/>
      <Project text="proyecto 10" link="https://www.google.com/"gridArea="p10"/>
    </Grid>
  );
}

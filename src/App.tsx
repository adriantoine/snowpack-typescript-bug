import { Box, Text, Container, Flex, TextProps } from "@chakra-ui/react";
import React, { FC } from "react";

const ColorText: FC<TextProps> = ({ color, ...props }) => {
  return <Text fontWeight="bold" as="span" color={`${color}.400`} {...props} />;
};

export default function Home() {
  return (
    <Box>
      <Box bg="gray.900" color="white" h="100vh">
        <Box h="100%">
          <Container h="100%" maxW="65rem">
            <Flex
              h="100%"
              justify="center"
              align="center"
              transform="translateY(-5%)"
            >
              <Text
                fontSize={["xl", "2xl", "3xl", "4xl"]}
                color="gray.400"
                textTransform="uppercase"
              >
                <Text
                  fontSize={["3xl", "4xl", "5xl", "6xl"]}
                  fontWeight="700"
                  lineHeight={1.2}
                  color="white"
                >
                  <ColorText fontWeight="900" color="pink">
                    Hi!
                  </ColorText>{" "}
                  My name is{" "}
                  <ColorText fontWeight="900" color="orange">
                    Adrien Antoine
                  </ColorText>
                  .
                </Text>
              </Text>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

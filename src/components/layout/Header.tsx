import {
  Box,
  Flex,
  Heading,
  Image,
  HStack,
  Container,
  GridItem,
} from "@chakra-ui/react";

import AccessibleLink from "@/components/AccessibleLink";

const Header = () => {
  return (
    <Box
      position="fixed"
      zIndex="10"
      as="header"
      width="full"
      top="0"
      left="0"
      right="0"
      bg="transparent"
      h="auto"
    >
      <Container
        centerContent
        py="24px"
        d="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gap="30px"
      >
        <GridItem colSpan={4}>
          <HStack spacing="32px">
            <AccessibleLink href="/">About</AccessibleLink>
            <AccessibleLink href="/">Pricing</AccessibleLink>
            <AccessibleLink href="/">Contact</AccessibleLink>
          </HStack>
        </GridItem>
        <GridItem
          colSpan={4}
          d="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image src="/icons/wise.svg" height="29px" alt="Logo Wise" />
        </GridItem>
        <GridItem colSpan={4} d="flex">
          <HStack spacing="14px" ml="auto">
            <AccessibleLink href="/">
              <Box
                bg="hsla(0, 0%, 100%, 0.1)"
                boxSize="32px"
                borderRadius="99px"
                d="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
              >
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 .467c-2.317 0-2.608.01-3.518.051-.908.042-1.528.186-2.07.397a4.179 4.179 0 00-1.513.984c-.474.474-.766.95-.984 1.511-.212.543-.356 1.163-.397 2.071C.478 6.391.467 6.682.467 9s.01 2.607.051 3.518c.042.908.186 1.528.397 2.07.218.562.51 1.038.984 1.513.474.474.95.766 1.511.984.543.211 1.163.355 2.071.397.91.041 1.201.051 3.519.051s2.607-.01 3.518-.051c.908-.042 1.529-.186 2.072-.397a4.175 4.175 0 001.51-.985c.475-.474.767-.95.985-1.511.21-.543.354-1.163.397-2.071.04-.91.051-1.2.051-3.518 0-2.318-.01-2.608-.051-3.519-.043-.908-.187-1.528-.397-2.07a4.187 4.187 0 00-.985-1.512 4.17 4.17 0 00-1.51-.984C14.044.704 13.424.56 12.515.518c-.91-.041-1.2-.051-3.518-.051h.003zm-.765 1.537h.766c2.278 0 2.548.009 3.448.05.832.037 1.284.176 1.584.293.399.155.683.34.981.638.299.3.484.584.639.982.116.3.256.752.293 1.584.041.9.05 1.17.05 3.447s-.009 2.548-.05 3.447c-.038.832-.177 1.284-.293 1.584-.155.398-.34.682-.639.98a2.64 2.64 0 01-.98.639c-.301.117-.753.256-1.585.294-.9.04-1.17.05-3.448.05-2.279 0-2.549-.01-3.448-.05-.832-.039-1.284-.178-1.585-.294a2.644 2.644 0 01-.981-.639 2.645 2.645 0 01-.639-.98c-.117-.301-.256-.753-.294-1.585-.04-.9-.049-1.17-.049-3.448 0-2.279.008-2.548.05-3.447.037-.832.176-1.284.293-1.585.155-.398.34-.682.639-.981.298-.299.583-.484.981-.639.3-.117.753-.256 1.585-.294.787-.035 1.092-.046 2.682-.048v.002zm5.32 1.417a1.024 1.024 0 100 2.048 1.024 1.024 0 000-2.048zM9.002 4.618a4.382 4.382 0 100 8.765 4.382 4.382 0 000-8.765zm0 1.537a2.844 2.844 0 110 5.69 2.844 2.844 0 010-5.69z"
                    fill="#fff"
                  />
                </svg>
              </Box>
            </AccessibleLink>
            <AccessibleLink href="/">
              <Box
                bg="hsla(0, 0%, 100%, 0.1)"
                boxSize="32px"
                borderRadius="99px"
                d="flex"
                justifyContent="center"
                alignItems="center"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.533 8.988a8.536 8.536 0 01-.671 3.317 8.588 8.588 0 01-3.09 3.748 8.62 8.62 0 01-1.45.786 8.575 8.575 0 01-6.644 0 8.62 8.62 0 01-1.45-.786 8.598 8.598 0 01-3.09-3.748 8.492 8.492 0 01-.499-5.033 8.472 8.472 0 011.285-3.049 8.603 8.603 0 012.304-2.3A8.45 8.45 0 017.28.64a8.6 8.6 0 015.04.496 8.564 8.564 0 013.754 3.087 8.444 8.444 0 011.285 3.05c.115.56.173 1.138.173 1.715zM5.89 2.406a7.288 7.288 0 00-4.022 5.082c.192.001 3.23.04 6.728-.889A43.818 43.818 0 005.89 2.406zM9.2 7.72C5.448 8.842 1.847 8.76 1.718 8.756c-.002.078-.006.154-.006.232a7.24 7.24 0 001.867 4.863c-.002-.004 1.992-3.537 5.925-4.807.095-.032.191-.06.287-.088A24.597 24.597 0 009.2 7.72zm4.612-4.194A7.258 7.258 0 009 1.712c-.593 0-1.167.071-1.718.203.11.147 1.478 1.96 2.725 4.245 2.75-1.03 3.787-2.607 3.805-2.634zm-3.524 6.636l-.048.016c-4.3 1.497-5.704 4.513-5.72 4.546A7.278 7.278 0 009 16.264a7.26 7.26 0 002.845-.576c-.108-.636-.532-2.865-1.557-5.526zm2.784 4.861a7.279 7.279 0 003.123-4.882c-.15-.048-2.19-.692-4.542-.316.956 2.623 1.345 4.76 1.419 5.198zm-2.504-7.778a22.844 22.844 0 01.641 1.432c2.504-.315 4.97.214 5.076.236a7.234 7.234 0 00-1.658-4.548c-.013.02-1.182 1.706-4.06 2.88z"
                    fill="#fff"
                  />
                </svg>
              </Box>
            </AccessibleLink>
            <AccessibleLink href="/">
              {" "}
              <Box
                bg="hsla(0, 0%, 100%, 0.1)"
                boxSize="32px"
                borderRadius="99px"
                d="flex"
                justifyContent="center"
                alignItems="center"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 .467c-2.317 0-2.608.01-3.518.051-.908.042-1.528.186-2.07.397a4.179 4.179 0 00-1.513.984c-.474.474-.766.95-.984 1.511-.212.543-.356 1.163-.397 2.071C.478 6.391.467 6.682.467 9s.01 2.607.051 3.518c.042.908.186 1.528.397 2.07.218.562.51 1.038.984 1.513.474.474.95.766 1.511.984.543.211 1.163.355 2.071.397.91.041 1.201.051 3.519.051s2.607-.01 3.518-.051c.908-.042 1.529-.186 2.072-.397a4.175 4.175 0 001.51-.985c.475-.474.767-.95.985-1.511.21-.543.354-1.163.397-2.071.04-.91.051-1.2.051-3.518 0-2.318-.01-2.608-.051-3.519-.043-.908-.187-1.528-.397-2.07a4.187 4.187 0 00-.985-1.512 4.17 4.17 0 00-1.51-.984C14.044.704 13.424.56 12.515.518c-.91-.041-1.2-.051-3.518-.051h.003zm-.765 1.537h.766c2.278 0 2.548.009 3.448.05.832.037 1.284.176 1.584.293.399.155.683.34.981.638.299.3.484.584.639.982.116.3.256.752.293 1.584.041.9.05 1.17.05 3.447s-.009 2.548-.05 3.447c-.038.832-.177 1.284-.293 1.584-.155.398-.34.682-.639.98a2.64 2.64 0 01-.98.639c-.301.117-.753.256-1.585.294-.9.04-1.17.05-3.448.05-2.279 0-2.549-.01-3.448-.05-.832-.039-1.284-.178-1.585-.294a2.644 2.644 0 01-.981-.639 2.645 2.645 0 01-.639-.98c-.117-.301-.256-.753-.294-1.585-.04-.9-.049-1.17-.049-3.448 0-2.279.008-2.548.05-3.447.037-.832.176-1.284.293-1.585.155-.398.34-.682.639-.981.298-.299.583-.484.981-.639.3-.117.753-.256 1.585-.294.787-.035 1.092-.046 2.682-.048v.002zm5.32 1.417a1.024 1.024 0 100 2.048 1.024 1.024 0 000-2.048zM9.002 4.618a4.382 4.382 0 100 8.765 4.382 4.382 0 000-8.765zm0 1.537a2.844 2.844 0 110 5.69 2.844 2.844 0 010-5.69z"
                    fill="#fff"
                  />
                </svg>
              </Box>
            </AccessibleLink>

            <AccessibleLink href="/">
              <Box
                bg="hsla(0, 0%, 100%, 0.1)"
                boxSize="32px"
                borderRadius="99px"
                d="flex"
                justifyContent="center"
                alignItems="center"
              >
                <svg
                  width="16"
                  height="14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.52 4.005l.034.554-.56-.068C4.959 4.23 3.179 3.35 1.669 1.87l-.74-.735-.19.543c-.402 1.209-.145 2.485.695 3.344.447.475.346.542-.426.26-.268-.09-.503-.158-.526-.124-.078.079.19 1.107.403 1.514.291.565.884 1.118 1.533 1.446l.549.26-.65.011c-.626 0-.648.011-.581.249.224.734 1.108 1.514 2.093 1.853l.693.237-.604.361a6.302 6.302 0 01-3 .836c-.503.012-.917.057-.917.09 0 .114 1.365.747 2.16.995 2.384.735 5.215.418 7.342-.836 1.51-.893 3.021-2.666 3.727-4.384.38-.915.76-2.587.76-3.39 0-.52.034-.587.66-1.208.37-.362.717-.757.784-.87.112-.215.101-.215-.47-.023-.951.339-1.085.294-.615-.215.347-.361.76-1.017.76-1.209 0-.034-.167.023-.357.125-.202.113-.65.282-.985.384l-.605.192-.548-.373c-.302-.203-.727-.43-.951-.497C11.09.548 10.218.57 9.703.75c-1.399.509-2.283 1.82-2.182 3.254z"
                    fill="#fff"
                  />
                </svg>
              </Box>
            </AccessibleLink>
          </HStack>
        </GridItem>
      </Container>
    </Box>
  );
};

export default Header;

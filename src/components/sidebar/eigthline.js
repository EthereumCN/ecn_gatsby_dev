import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Box,
  PseudoBox,
  Icon,
} from "@chakra-ui/core"
import { Link } from "gatsby"

const Eightline = () => {
  return (
    <>
      <AccordionItem border="0">
        {({ isExpanded }) => (
          <>
            <AccordionHeader p={0} borderRadius="0.3rem" _focus="boxShadow:0px">
              <PseudoBox
                borderRadius="0.3rem"
                flex="1"
                display="flex"
                cursor="pointer"
                py="8px"
                px="16px"
                textAlign="left"
                _hover={{
                  color: "orange.300",
                  paddingLeft: "25px",
                  transition: " all 0.1s linear",
                  bg: "rgb(233,233,233)",
                }}
              >
                <Box flex="1" textAlign="left">
                  <Link
                    to="/backend-interfaces"
                    style={{
                      display: "block",
                      width: "100%",
                    }}
                  >
                    后端APIs
                  </Link>
                </Box>
                <Icon
                  fontSize="1.3rem"
                  name={isExpanded ? "chevron-down" : "chevron-right"}
                />
              </PseudoBox>
            </AccordionHeader>
            {/* 子项 */}
            <AccordionPanel py="0">
              <Accordion defaultIndex={[0]} allowMultiple>
                {/* 第一栏 */}
                <AccordionItem border="0">
                  <AccordionHeader
                    p={0}
                    borderRadius="0.3rem"
                    _focus="boxShadow:0px"
                  >
                    <PseudoBox
                      borderRadius="0.3rem"
                      flex="1"
                      display="flex"
                      cursor="pointer"
                      py="8px"
                      px="16px"
                      textAlign="left"
                      _hover={{
                        color: "orange.300",
                        paddingLeft: "25px",
                        transition: " all 0.1s linear",
                        bg: "rgb(233,233,233)",
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        <Link
                          to="/web3.py"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          Web3.py
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第二栏 */}

                <AccordionItem border="0">
                  <AccordionHeader
                    p={0}
                    borderRadius="0.3rem"
                    _focus="boxShadow:0px"
                  >
                    <PseudoBox
                      borderRadius="0.3rem"
                      flex="1"
                      display="flex"
                      cursor="pointer"
                      py="8px"
                      px="16px"
                      textAlign="left"
                      _hover={{
                        color: "orange.300",
                        paddingLeft: "25px",
                        transition: " all 0.1s linear",
                        bg: "rgb(233,233,233)",
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        <Link
                          to="/nethereum"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          Nethereum
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第三栏 */}

                <AccordionItem border="0">
                  <AccordionHeader
                    p={0}
                    borderRadius="0.3rem"
                    _focus="boxShadow:0px"
                  >
                    <PseudoBox
                      borderRadius="0.3rem"
                      flex="1"
                      display="flex"
                      cursor="pointer"
                      py="8px"
                      px="16px"
                      textAlign="left"
                      _hover={{
                        color: "orange.300",
                        paddingLeft: "25px",
                        transition: " all 0.1s linear",
                        bg: "rgb(233,233,233)",
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        <Link
                          to="/web3j"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          Web3j
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第四栏 */}

                <AccordionItem border="0">
                  <AccordionHeader
                    p={0}
                    borderRadius="0.3rem"
                    _focus="boxShadow:0px"
                  >
                    <PseudoBox
                      borderRadius="0.3rem"
                      flex="1"
                      display="flex"
                      cursor="pointer"
                      py="8px"
                      px="16px"
                      textAlign="left"
                      _hover={{
                        color: "orange.300",
                        paddingLeft: "25px",
                        transition: " all 0.1s linear",
                        bg: "rgb(233,233,233)",
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        <Link
                          to="/web3.php"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          Web3.php
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第五栏 */}

                <AccordionItem border="0">
                  <AccordionHeader
                    p={0}
                    borderRadius="0.3rem"
                    _focus="boxShadow:0px"
                  >
                    <PseudoBox
                      borderRadius="0.3rem"
                      flex="1"
                      display="flex"
                      cursor="pointer"
                      py="8px"
                      px="16px"
                      textAlign="left"
                      _hover={{
                        color: "orange.300",
                        paddingLeft: "25px",
                        transition: " all 0.1s linear",
                        bg: "rgb(233,233,233)",
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        <Link
                          to="/ethereum.rb"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          Ethereum.rb
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第6栏 */}

                <AccordionItem border="0">
                  <AccordionHeader
                    p={0}
                    borderRadius="0.3rem"
                    _focus="boxShadow:0px"
                  >
                    <PseudoBox
                      borderRadius="0.3rem"
                      flex="1"
                      display="flex"
                      cursor="pointer"
                      py="8px"
                      px="16px"
                      textAlign="left"
                      _hover={{
                        color: "orange.300",
                        paddingLeft: "25px",
                        transition: " all 0.1s linear",
                        bg: "rgb(233,233,233)",
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        <Link
                          to="/web3.hs"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          Web3.hs
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第7栏 */}

                <AccordionItem border="0">
                  <AccordionHeader
                    p={0}
                    borderRadius="0.3rem"
                    _focus="boxShadow:0px"
                  >
                    <PseudoBox
                      borderRadius="0.3rem"
                      flex="1"
                      display="flex"
                      cursor="pointer"
                      py="8px"
                      px="16px"
                      textAlign="left"
                      _hover={{
                        color: "orange.300",
                        paddingLeft: "25px",
                        transition: " all 0.1s linear",
                        bg: "rgb(233,233,233)",
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        <Link
                          to="/kethereum"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          KEthereum
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>
              </Accordion>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </>
  )
}

export default Eightline

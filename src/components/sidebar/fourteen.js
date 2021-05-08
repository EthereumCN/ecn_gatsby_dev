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
                    to="/testnets"
                    style={{
                      display: "block",
                      width: "100%",
                    }}
                  >
                    以太坊测试网
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
                          to="https://ethfans.org/posts/eli5-explanation-of-the-ethereum-2-0-testnet"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          以太坊2.0测试网 🔗
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>
                {/* 第二栏 */}
                <AccordionItem border="0">
                  {({ isExpanded }) => (
                    <>
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
                              to="/public-testnets"
                              style={{
                                display: "block",
                                width: "100%",
                              }}
                            >
                              公共测试网
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
                                    to="/ropsten"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Ropsten
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
                                    to="/kovan"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    kovan
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
                                    to="/rinkeby"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Rinkeby
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>

        

                          {/* 第五栏 */}
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
                                    to="/gorli"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Görli
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




                {/* 第三栏 */}

{/* 第二栏 */}
<AccordionItem border="0">
                  {({ isExpanded }) => (
                    <>
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
                              to="/local-testnets"
                              style={{
                                display: "block",
                                width: "100%",
                              }}
                            >
                              本地测试网
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
                                    to="/ganache"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Ganache
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
                                    to="/ganache-cli"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Ganache CLI
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
                          to="/ethereum-graph-debugger"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          Ethereum graph debugger
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

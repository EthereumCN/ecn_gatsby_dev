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

const Fourthline = () => {
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
                    to="/eips"
                    style={{
                      display: "block",
                      width: "100%",
                    }}
                  >
                    开发规范
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
                          to="/eips-1"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          EIPs
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第二栏 */}
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
                    to="/ercs-1"
                    style={{
                      display: "block",
                      width: "100%",
                    }}
                  >
                    ERCs
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
                          to="/erc20"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          ERC20
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
                          to="/erc621"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          ERC621
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

 {/* 第3栏 */}
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
                          to="/erc721"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          ERC721
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>
 {/* 第4栏 */}
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
                          to="/erc777"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          ERC777
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>
 {/* 第5栏 */}
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
                          to="/erc884"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          ERC884
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
                          to="/erc918"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          ERC918
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
                          to="/erc1155"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          ERC1155
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



              </Accordion>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </>
  )
}

export default Fourthline

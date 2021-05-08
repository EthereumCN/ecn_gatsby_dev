import React from "react"
import { Accordion, AccordionItem, PseudoBox, Text } from "@chakra-ui/core"
import Secondline from "./secondline"
import Thirdline from "./thirdline"
import Fourthline from "./fourthline"
import Fifthline from "./fifthline"
import Sixthline from "./sixthline"
import Seventhline from "./seventhline"
import Eigthline from "./eigthline"
import Nineline from "./nineline"
import Tenline from "./tenline"
import Elevenline from "./elevenline"
import Twelveline from "./twelve"
import Thirteen from "./thirteen"
import Fourteen from "./fourteen"
import Fifteen from "./fifteen"
import Sixteen from "./sixteen"
import Seventeen from "./seventeen"
import Eighteen from "./eighteen"
import { Link } from "gatsby"
const Sidebar = () => {
  return (
    // 总得sidebar
    <Accordion defaultIndex={[0]} allowMultiple>
      {/* 第一行 */}
      <AccordionItem border="0">
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/hello_developer" style={{ display: "block", width: "100%" }}>
            以太坊开发者门户
          </Link>
        </PseudoBox>
      </AccordionItem>

      {/* 第二行 */}
      <AccordionItem border="0">
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/developer-tool-list" style={{ display: "block", width: "100%" }}>
            链就码林高手
          </Link>
        </PseudoBox>
      </AccordionItem>

      {/* 第三行 */}
      <AccordionItem border="0">
        <Text fontWeight="700" color="#9DAAB6" mt="3vh" px="16px">
          ETH2.0
        </Text>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/eth2-devs-handbook-faqs" style={{ display: "block", width: "100%" }}>
            ETH2.0开发者手册和常见问题
          </Link>
        </PseudoBox>
      </AccordionItem>

      {/* 第五行  */}
      <Text fontWeight="700" color="#9DAAB6" mt="3vh" px="16px">
        十八班武艺
      </Text>

      {/* 基础工具 */}
      <Secondline />

      {/* 第六行  智能合约语音*/}
      <Thirdline />
      {/* 第四行  智能合约库*/}
      <Fourthline />
      {/* 第五行 以太坊客户端*/}
      <Fifthline />
      {/* 第六行 集成开发环境IDEs*/}
      <Sixthline />
      {/* 第七行  前端APIs*/}
      <Seventhline />
      {/* 第八行 后端APIs*/}
      <Eigthline />
      {/* 第九行  智能合约测试和部署*/}
      <Nineline />
      {/* 第十行 存储*/}
      <Tenline />
      {/* 第十一行 安全工具 */}
      <Elevenline />
      {/* 第十2行 数据查询 */}
      <Twelveline />

      {/* 第十3行 测试工具 */}
      <Thirteen />

      {/* {以太坊测试网} */}
      <Fourteen />

      {/* {企业区块链工具} */}
      <Fifteen />
      {/* 开源写作 */}
      <Sixteen />
      {/* 开发者论坛 */}
      <Seventeen />
      {/* 开发规范 */}
      <Eighteen />

      {/* 延伸阅读 */}
      <AccordionItem border="0">
        <Text fontWeight="700" color="#9DAAB6" mt="3vh" px="16px">
          延伸阅读
        </Text>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="https://github.com/inoutcode/ethereum_book" style={{ display: "block", width: "100%" }}>
            入门数据: 精通以太坊
          </Link>
        </PseudoBox>
      </AccordionItem>

      {/* 以太坊设计原理 */}
      <AccordionItem border="0">
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="https://ethfans.org/posts/510" style={{ display: "block", width: "100%" }}>
            以太坊设计原理
          </Link>
        </PseudoBox>
      </AccordionItem>
      {/* 智能合约编程入门 */}
      <AccordionItem border="0">
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="https://ethfans.org/posts/101-noob-intro" style={{ display: "block", width: "100%" }}>
            智能合约编程入门
          </Link>
        </PseudoBox>
      </AccordionItem>

      {/* DApp开发 */}
      <AccordionItem border="0">
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="https://ethfans.org/posts/ethereum-development-walkthrough-part-5" style={{ display: "block", width: "100%" }}>
            DApp开发
          </Link>
        </PseudoBox>
      </AccordionItem>

      {/* 以太坊开发演练系列 */}
      <AccordionItem border="0">
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="https://ethfans.org/posts/ethereum-development-walkthrough-part-1-smart-contracts" style={{ display: "block", width: "100%" }}>
            以太坊开发演练系列
          </Link>
        </PseudoBox>
      </AccordionItem>
    </Accordion>
  )
}

export default Sidebar

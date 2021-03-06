---
path: eips
id: 92
title: 开发规范
description: 以太坊白皮书概要性地介绍了以太坊，而以太坊黄皮书则通过大量的定义和公式详细地描述了以太坊的技术实现。
date: 2020-06-28T02:15:01.762Z
author: ECN
---


## EIPs是什么？

以太坊改进提案（Ethereum Improvement Proposals, EIP）是规定以太坊潜在新功能或过程的标准。 EIP 包含拟议变更的技术规范，充当社区的“真理之源”。在提出 EIP 的过程中，开发者讨论和开发以太坊网络升级和应用程序标准。

每一个以太坊社区成员都可以创建EIP，可以按照EIP 1中包含的 EIP 编写指南进行创建。 EIP要简洁地介绍主要技术规范设计理念。 EIP创建者负责在社区内建立共识并记录不同意见。纵观历史，鉴于提交正确格式EIP的技术门槛较高，大多数EIP创建者都是应用程序或协议开发者。

## EIPs为何举足轻重？

EIP在记录技术变动过程这一方面发挥着核心作用，为创建者提议、辩论和采纳变更提供方式。 EIP有多种类型，包括用于低层级协议更改的核心EIP，需要更改共识并且升级网络，以及用于规定应用程序标准的ERC。举个例子，代币标准如 ERC20 或 ERC721 允许能够与这些标准代币进行交互的应用程序也能与所有采用相同标准规则的代币进行交互，从而减少了创建具备互操作性应用程序的难度。

每次网络升级，每个以太坊客户端都需要实现一组EIP。这意味着，与以太坊主网上的其他客户端共识一致的前提是确保客户端开发者们都已实现所需EIP。

除了提供变更的技术规范外，EIP是以太坊的治理工具，任何人都可以自由地提议提案，然后社区中的各个权益相关者将进行辩论，以确定是否应将该条提案纳入标准或采用于网络升级。并非所有应用程序都必须采用非核心EIP，例如可以创建非ERC20代币，但是对于任何一个节点来说，只有进行升级，才能成为同一网络的一部分，所以所有应用程序都必须广泛采用核心EIP。因此，与非核心EIP相比，核心EIP需要在社区内达成更广泛的共识。

## EIPs的发展历程 <a id="history-of-eips"></a>

以太坊改进提案 \(EIP\) 的Github代码库于2015年10月创建，EIP的发展历程受启发于比特币改进提案（BIP），而比特币改进提案的发展则受启发于Python改进提案（PEP）。

EIP 编辑者的任务是审查EIP的技术合理性，纠正拼写/语法和代码样式。从2015年到2016年末，EIP编辑者最初由Martin Becze、Vitalik Buterin、Gavin Wood和其他一些人担任。

当前的EIP编辑者是：

* Alex Beregszaszi \(EWASM/以太坊基金会\)
* Greg Colvin \(社区成员\)
* Casey Detrio \(EWASM/以太坊基金会\)
* Hudson James \(以太坊基金会\)
* Nick Johnson \(ENS\)
* Nick Savers \(社区成员\)


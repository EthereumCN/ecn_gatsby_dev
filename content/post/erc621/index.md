---
path: erc621
id: 97
title: ERC621
description: ERC621
date: 2020-06-28T02:15:01.762Z
author: ECN
---


ERC621在ERC20标准的基础上增加了两个功能，以调节流通中的通证总量。简而言之，ERC621建议`totalSupply`的可调节性， ERC20仅允许合约所有者在创建期间定义单个通证的发行事件。使用ERC621，可以通过函数`increaseSupply`和`reducingSupply`定义新的`totalSupply`，并建议只有合约所有者和受信任用户能够访问这些功能。为了增强ERC621的功能性和安全性，应实现用于溢出检查、合约属性修改和限制性特权的附加功能。


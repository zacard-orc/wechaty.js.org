---
title: "微信机器人能够做些什么事？"
author: zhuangbiaowei
categories: article
tags:
  - ai
  - news
---

作为一个会写代码的产品经理，我最近自己在玩一个微信机器人的开源框架：[wechaty](https://github.com/wechaty/wechaty)，因为上手特别简单，通过修改hello world，我也写出了自己的微信机器人，所以引发了很多的联想，打算和朋友们聊聊这些想法。

只要是用微信客户端，人类可以完成的事情，**微信机器人**理论上可以做任何事。当然，以下一些限制，还是存在的？

* 没有朋友圈相关的API，这个没办法。很多基于朋友圈可以做的玩法，现在还不行。
* 接受“关键字”命令会很擅长，如果要实现自然语言操作（对话），就很困难。

其他的，就没啥了。下面开始海阔天空：

## 记录聊天的历史

这是我最先尝试的工作，将微信群里聊天的记录，同步到[gitter.im](https://gitter.im)去，只要做两个机器人，分别加入微信群和gitter群，然后将微信里收到的消息，实时转发过去就行。稍微困难一点的，是解析各种消息类型，然后正常的转发过去。

这样做的好处只有一个：因为微信无法为后来者，展示群里的过去的聊天记录，而gitter可以做到这一点，这样新人要回看过去的聊天记录，就非常方便了。

## 社区招新

现在我们已经可以实现，任何人都可以自动加这个机器人为好友。然后和这个机器人聊天。如果输入“#join 申请加入的理由”，这个人就会被拉到一个微信群中，并且这个微信群里，有一些“面试官”，他们会与这个新人聊天，并确定是否可以接受他的加入申请。

还可以有更进一步的操作，通过#join _topic_，选择加入不同的微信群。对于一个大的社区，这样应该会很有帮助。

## 多群直播转发

这个应该是很容易的工作了，假设一个特别厉害的大牛，在线直播（图文、音频多条记录，再加上答疑）。这就可以先创建1群、2群到n群，然后大牛不必加入任何一个群，只需要对着微信机器人发言就好。机器人就可以把他的授课内容，同步的转发到多个微信群里。

更进一步的，如果有人提问，机器人也可以转发这些问题给讲师（或者再加上一个提问人工审核的中间步骤）。讲师的回答，也可以同步的转发到所有的群里。

于是，微信群的500人上限，就不再是问题了。

## 按规定改名

很多的微信群，都会有改名的规范，比如“庄表伟@上海#开源社”代表我的姓名，所在城市与单位。

如果使用微信机器人，完全可以在新人加入群的时候提示一遍。24小时内不改名的，自动踢人。

## 识别小广告

参考某种垃圾邮件的过滤算法，只要识别出群里有人发的内容是小广告的，直接踢走。

## 清理潜水者

既然可以记录所有的群内聊天记录。那么，长期潜水的群友，在清理之前再刷屏，就已经没啥用了。

一个简单的算法，平均每天发言不少于3条，连续不发言时间小于3天。就可以将潜水者筛选出来，想清理的，就可以直接动手了。

## 会员等级制度

一个更加复杂的贡献点制度，也是有可能的。

* 新加入群的朋友，等级为0。
* 连续2周活跃，等级为1。
* 等级为1以上的朋友，可以发言“@某某 谢谢”，或其他关键字
* 获得感谢超过N的朋友，等级可以升一级
* 发红包的，直接踢走（不能通过发红包，来买感谢）

## 作为管理员的工具

在一对一聊天的时候，机器人可以接受更多的命令。比如：

* find :name="张三"
* kick :name="张三", :room=:all
* ban :name="张三"
* broadcast :msg="", :room=/开源社/g
* manager add :name="张三"
* manager delete :name="张三"
* 还可以有很多很多......

## 老用户促活

曾经活跃的用户，最近一段时间不活跃了。发个消息“撩一下”。如果能够做到更加智能：“某某群里，最近在聊前端的Vue框架，你不打算参与讨论一下吗？”

相信能够拉回来很多人。

## 工作群——对接工作事项

工作群可以做的事情就太多了。这里只能先随意的扯几句。

* 经理：今天的XXX，分析出原因了吗？
* 小张：是的，发现了一个问题，我们明天解决
* 经理：是你去解决吗？
* 小张：@李四 明天这个问题解决一下。 @机器人 #newtask 修改XXXX导致的bug
* 机器人： 已经创建任务单，单号 #13048，责任人：@李四
* 李四： 收到

## 工作群——ChatOps

讲微信群的聊天消息，转发到某个支持ChatOps的IM，比如Slack或者BearyChat，那就更加是海阔天空了。

---

先聊到这里，后续的想法，也欢迎大家一起来讨论。二维码是“开源社-bot”，欢迎添加。功能还很弱，大家轻拍 :)

![开源社](/assets/2018/kaiyuanshe.png)

> 作者: [庄表伟](https://github.com/zhuangbiaowei/)，[开源社](http://www.kaiyuanshe.cn/)理事/执行长。首发于简书: [微信机器人能够做些什么事？](https://www.jianshu.com/p/9698395511e0)

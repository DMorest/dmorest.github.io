# PHATASiA LOTUS LAND 首页说明

## 首页首屏

首页打开时会显示：

- 发光 Cyan 标题：`PHATASiA LOTUS LAND`
- 副标题：`最 后 一 片 失 乐 园。`
- 底部居中双下箭头，可点击滚动到首页剩余内容

已有的 Phigros 等边三角鱼眼网格没有在 v5.0 中重绘；它仍然只存在于首屏，并会随首屏一起向上滚出视口。

## 首页精选图片

把图片放在：

```text
主站/themes/phigros/source/images/home/
```

默认文件名：

```text
log.jpg
tutorial.jpg
creation.jpg
```

如果要更换图片或文字，编辑主题 `_config.yml` 中的 `home.features`。

## 时间线

`home.timeline_count` 控制首页显示多少篇近期文章，默认 6 篇。

## 杂项

在 `home.misc` 中填写：

- `contact` / `contact_url`：作者联系方式
- `friends`：友站数组，每项包含 `name` 和 `url`
- `copyright_title`：版权区标题

## 文章卡片

首页文章卡片不再显示 EZ / HD / IN / AT 难度标签；文章的 category 仍可正常显示。


## v5.1 virtual-screen homepage

首页固定为单视口高度，不进行普通页面滚动。鼠标滚轮 / 触摸上滑下滑切换四个屏幕：启动页、精选、时间线、MISC；切换时启动标题上滑淡出，精选/时间线/MISC 从下方浮入。首页背景图与三角网格只存在于启动屏幕并淡出。


## MISC / 社交链接
在 `_config.yml` 的 `home.misc.social` 配置 Bilibili、GitHub、X 和邮箱：

```yaml
social:
  bilibili: "https://space.bilibili.com/你的UID"
  github: "https://github.com/你的账号"
  x: "https://x.com/你的账号"
  email: "mailto:dmorest@foxmail.com"
```

友站继续写在 `home.misc.friends`：

```yaml
friends:
  - name: "友站名称"
    url: "https://example.com/"
```

## 背景图
主题自带的背景图是 `source/images/bg.jpg`，默认配置已经改为 `/images/bg.jpg`，所以开箱即可显示。若要替换，直接覆盖：

`themes/phigros/source/images/bg.jpg`

也可以在 `_config.yml` 的 `background.image` 改成其它路径，例如 `/images/my-bg.jpg`。

### Homepage background image
The homepage ambient background uses `themes/phigros/source/images/bg.jpg` by default. Replace that file to change the image. The image is deliberately darkened and fades out when leaving the startup screen.


### v5.8 background behavior
The homepage uses a pure-black background. The dot field is hidden on screen 1 and appears from screen 2 onward. Post pages use a pure-black background with a faint dot field. The configured background image is no longer rendered on these surfaces.

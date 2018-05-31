# CareerBuilder

### 1、静态页面

- 导航栏有hover效果，其中login和register按钮有点击弹出效果
- banner区域，表单有hover效果（边框变为蓝色）
- 整个页面的按钮，hover时按钮背景颜色变色

### 2、页面样式实现

- 导航栏：按钮浮动，整体固定定位
- banner区：遮罩层绝对定位，表单内容绝对定位
- About区-上半部分：绝对定位
- About区-下半部分图文展示：浮动；三角形绝对定位
- Gallery区：dl标签&&浮动

### 3、弹出层

- 导航栏的LOGIN以及REGISTER按钮有弹出层效果
- 登录页面的LOGIN页面，account和password都为admin的时候，弹出登录成功页面
- 注册页面的REGISTER页面，password和repassword一致，且verification为123456时，弹出注册成功页面

### 4、弹出层实现

- 弹出层页面（包括内容框和遮罩层）固定定位。
- 弹出层内容部分动态填充（ 包括登录成功&&注册成功界面 ）：根据点击的按钮不同，填充不同的内容窗体。

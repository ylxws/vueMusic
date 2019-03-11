# vue-music

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# vue 基础
  
> 基础知识

## VUE实例

## 计算属性

  computed：{}
  计算属性是基于它们的依赖进行缓存的，只在相关依赖发生改变时他们才会重新求值。

### 数据更新检测

#### 变异方法：Vue包含一组观察数组的变异方法，所以它们也将回触发视图更新

push，pop，shift，unshift，splice，sort，reverse调用或改变这些方法调用的原始数组

#### 非变异方法

filter，concat，slice不会改变原数组，但总是返回一个新数组。使用非编译方法时可以用新	数组替换旧数组

### 注意由于JavaScript限制，Vue不能检测一下变动的数组：

  *当利用索引直接设置一个项时， vm.items[indexOfItem] = newValue

  *当修改数组的长度时， vm.items.length = newLength

是非响应式的
===》解决：
`
/ /Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
// vm.$set实例方法
vm.$set(vm.items, indexOfItem, newValue)
// splice
vm.items.splice(newLength)
`


### 对象更改检测注意事项

由于JavaScript限制Vue不能检测对象属性的添加或删除（非响应）



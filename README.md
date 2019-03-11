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

  ### 数据属性

  创建实例时，vue响应式系统中加入了data对象中所有的属性，当属性值发生改变时，视图将会作出响应，重新渲染，匹配更新<br>
  **只有实例被创建时data中存在的属性才是响应式的**<br>
    Object.freeze()阻止修改现有属性，响应系统无法再追踪变化<br>

    ```
      var obj = { a: 1 }
      Object.freeze(obj)

      new Vue({
        el: '#app'
        data: obj
      }) // 此时无法追踪变化
    ```

  ### 实例属性与方法: 有前缀 '$'

  ### 生命周期钩子

  **不要在选项属性或回调上勇士箭头函数**<br>

  #### 比如

    ```
      created: () => {}
      或vm.$watch('a', (v) => this.mymethod())
    ```
  因为箭头函数适合伏击上下文绑定在一起的，this，不会是如你所预期的Vue实例<br>
  导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误

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
```
/ /Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
// vm.$set实例方法
vm.$set(vm.items, indexOfItem, newValue)
// splice
vm.items.splice(newLength)
```


### 对象更改检测注意事项

由于JavaScript限制Vue不能检测对象属性的添加或删除（非响应）

## 侦听器

  适用于当需要在数据变化时执行异步或者开销较大的操作时

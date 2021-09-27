// components/tab_control/tab_control.js
Component({
  /********* 组件的属性列表，外面传入的数据 *******/
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /************ 组件的初始数据 ***********/
  data: {
    currentIndex: 0
  },

  /************ 组件的方法列表 *********/
  methods: {
    handleClick(event) {
      const index = event.target.dataset.index;
      this.setData({
        currentIndex: index
      });
      // console.log(this.data.currentIndex);
      this.triggerEvent('itemClick', {index, title: this.properties.titles[index]}, {})
    }
  },

  /*********** 组件额外的配置选项 ***********/
  options: {
    styleIsolation: '', // 样式的隔离方式，决定组件的样式是否可以跟页面中的样式相互影响
    multipleSlots: true, // 在使用多插槽是要设置为true
  },

  /********** 外界给组件传入额外的样式 ********/
  externalClasses: [],

  /******** 可以监听properties、data的变化 *******/
  observers: {
    counter: function(newVal) {
      console.log(newVal);
    }
  },

  /********** 组件监听生命周期函数 **********/
  // 1，监听所在页面的生命周期
  pageLifetimes: {
    show() {
      // console.log("组件所在页面显示出来时触发");
    },
    hide() {
      // console.log('组件所在页面隐藏起来时触发');
    },
    resize() {
      // console.log('组件所在页面的尺寸改变时触发');
    }
  },

  // 2，监听组件本身的生命周期
  lifetimes: {
    created() {
      // console.log('组件被创建出来时调用');
    },
    attached() {
      // console.log('组件被添加到页面或组件中时调用');
    },
    ready() {
      // console.log('组件被渲染出来时调用');
    },
    moved() {
      // console.log('组件被移动到另外一个节点时调用');
    },
    detached() {
      // console.log('组件被移除掉时调用');
    }
  }
})

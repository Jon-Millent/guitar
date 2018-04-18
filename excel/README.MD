## js 导出excel表格 

### 用法

```html
<template>
  <div>
    <a id="downlink"></a>
    <button class="button" @click="output('some', title, excelData)">导出</button>
  </div>
</template>
```

```js
  import ExcelTool from 'excel'
  
  
  export default {
    name: 'Index',
    data () {
      return {
        outFile: '',  // 导出文件el
        excelData: [  // 测试数据
          {
            name: '红烧鱼', size: '大', taste: '微辣', price: '40', remain: '100'
          },
          {
            name: '麻辣小龙虾', size: '大', taste: '麻辣', price: '138', remain: '200'
          }
        ],
        excelTool: null,
        title: ['菜名', '份量', '辣度', '价格', 'some']
      }
    },
    mounted () {
      this.outFile = document.getElementById('downlink')
      this.excelTool = new ExcelTool(this.outFile)
    },
    methods: {
      output(name, title, data){
        this.excelTool.exportExcel(name, title, data) // 文件名字， 行标题，数据
      }
    }
  }
```

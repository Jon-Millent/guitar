## js 导出表格 

### 用法

```html
<template>
  <div>
    <a id="downlink"></a>
    <el-button class="button" @click="output('some', excelData)">导出</el-button>
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
        excelTool: null
      }
    },
    mounted () {
      this.outFile = document.getElementById('downlink')
      this.excelTool = new ExcelTool(this.outFile)
    },
    methods: {
      output(name, data){
        this.excelTool.exportExcel(name, data) // 文件名字，数据
      }
    }
  }
```

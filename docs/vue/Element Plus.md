

## 1.内置的验证规则

```vue
<el-form :model="formData" :rules="rules">
        <el-form-item prop="account">
          <el-input v-model="formData.account" placeholder="请输入账号" >
            <template #prefix>
              <el-icon class="el-input__icon">
                <UserFilled  color="#fff"/>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>


// 登录表单校验-element 
const rules = reactive({
  account:[
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min:2,max:10, message: '请输入2-10位字符', trigger: 'blur' },
  ]
})

```

## 2.自定义校验规则

```vue
<div   ref="xxx">  我是盒子</div>
import {ref} from 'vue'
const xxx = ref(null);

 <el-form :model="formData" :rules="rules">        <el-form-item prop="account">          <el-input v-model="formData.account" placeholder="请输入账号" >            <template #prefix>              <el-icon class="el-input__icon">                <UserFilled  color="#fff"/>              </el-icon>            </template>          </el-input>        </el-form-item>
```

```js
//触发的校验事件函数
const validateAccount = (rule,value,callback)=>{
  //rule :整个input的所有的规则  
  //value:当前input的值
  //callback:回调函数，如果校验通过，callback() ，  必须只要写一次验证通过
  //        校验不通过，callback(new Error('错误信息'))
  let reg = /^1[3-9][0-9]{9}$/
  if(reg.test(value)){
    callback()
  }else{
    callback(new Error('请输入正确的手机号'))
  }

}

//校验规则
const rules = reactive({
  account:[
    {validator:validateAccount,trigger:'blur'}
  ]
})

```


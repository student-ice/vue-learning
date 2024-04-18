import { reactive, ref } from "vue";
import { editPasswordFn } from "@/api/login.js";
import { ElMessage } from "element-plus";

export function useEditPassword() {
  const dialogEditPassword = ref(false)

  const ruleFormEdit = reactive({
    oldpassword: '',
    password: '',
    repassword: ''
  })

  const rulesEdit = reactive({
    oldpassword: [{ required: true, message: '请输入原始密码', trigger: 'blur' }],
    password: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
    repassword: [{ required: true, message: '请再次输入新密码', trigger: 'blur' }],
  })

  const ruleFormRefEdit = ref(null)

  const editPasswordHandle = () => {
    ruleFormRefEdit.value.validate(async isvalid => {
      if(!isvalid) {
        return;
      }
      const res = await editPasswordFn(ruleFormEdit);
      if(res.msg != "ok") {
        return ElMessage.error(res.msg)
      }
      ElMessage({
        message: "密码修改成功",
        type: 'success'
      })
      dialogEditPassword.value = false;
    })
  }
  return {
    dialogEditPassword,
    ruleFormEdit,
    rulesEdit,
    ruleFormRefEdit,
    editPasswordHandle
  }
}